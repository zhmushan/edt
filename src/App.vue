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
