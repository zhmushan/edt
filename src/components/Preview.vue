<template>
  <div id="preview" v-html="htmlText"></div>
</template>

<script>
import { md } from "../md.ts";
export default {
  name: "Preview",
  props: {
    raw: String
  },
  computed: {
    htmlText: {
      get() {
        return md.render(this.raw);
      }
    }
  }
}
</script>

<style scoped>
#preview {
  word-wrap: break-word;
  width: 50vw;
  padding: 0 20px;
}
</style>