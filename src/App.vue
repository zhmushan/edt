<template>
  <div id="editor">
    <textarea v-model="input" @input="input = $event.target.value" spellcheck="false"></textarea>
  </div>
  <div id="preview" v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import {writeFile} from "tauri/api/fs";
import {md, throttle} from "./utils";

export default {
  name: "App",
  props: {
    fileText: String,
    filepath: String,
  },
  data() {
    return {
      _input: undefined,
    }
  },
  computed: {
    compiledMarkdown() {
      return md.render(this.input);
    },
    input: {
      get() {
        return this._input ?? this.fileText;
      },
      set(s: string) {
        this.autoSave(this.filepath, s);
        this._input = s;
      }
    },
  },
  methods: {
    autoSave: throttle(async (path: string, contents: string) => {
      await writeFile({path, contents});
    }, 300)
  },
}
</script>

<style lang="scss" scoped>
#app {
  code {
    color: #f66;
  }

  #editor {
    display: flex;
    width: 50vw;

    textarea {
      font-family: "Monaco", courier, monospace;
      font-size: 14px;
      width: 100%;
      padding: 20px;
      border: none;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      word-break: break-all;
    }
  }

  #preview {
    word-wrap: break-word;
    width: 50vw;
    padding: 0 20px;
  }
}
</style>
