<template>
  <img class="wrapper" :src="src" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  display: block;
}
</style>
