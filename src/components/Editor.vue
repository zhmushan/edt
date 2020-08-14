<template>
  <div id="editor">
    <textarea v-model="value"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Editor",
  props: {
    modelValue: String
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(v: string) {
        this.$emit("update:modelValue", v);
      }
    }
  }
}
</script>

<style scoped lang="scss">
#editor {
  display: flex;
  width: 50vw;
}

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
}
</style>