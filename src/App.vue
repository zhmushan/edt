<template>
  <Editor v-model="raw"/>
  <Preview :raw="raw"/>
</template>

<script>
import Editor from "./components/Editor.vue";
import Preview from "./components/Preview.vue";

export default {
  name: "App",
  components: {
    Editor,
    Preview
  },
  data() {
    return {
      raw: ""
    }
  }
}
</script>
