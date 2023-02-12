<script setup lang="ts">
import { defineComponent, reactive } from 'vue'
interface CountObject{
  count:number
}

const reactiveObj = reactive<CountObject>({count:0})

</script>

<template>

  <p>
    响应式：Count:{{ reactiveObj.count }}
    <span><button @click="reactiveObj.count++">加1</button></span>
  </p>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
