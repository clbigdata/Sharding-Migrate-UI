<script setup lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      message: "dfsdfsdf",
    };
  },
  directives: {
    componentTextByContent: {
      mounted(el, binding) {
        console.log(binding);
        el.innerHTML = binding.value;
      },
    },
  },
});
</script>

<template>
  <p v-componentTextByContent="message"></p>
</template>


