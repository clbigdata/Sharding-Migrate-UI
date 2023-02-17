<script setup lang="ts">
import { reactive } from "vue";
const noteList = reactive<string[]>(["西瓜", "香蕉", "葡萄"]);

const addNote = (element: KeyboardEvent): void => {
  const note: string = (element.currentTarget as HTMLInputElement).value;
  if (!note) {
    alert("输入不能为空，请重新输入");
    return;
  }
  //数组头部插入
  noteList.unshift(note);
  //还原输入框内容
  const newElement = element;
  (newElement.currentTarget as HTMLInputElement).value = "";
};
//删除笔记
const deleteNote = (index: number): void => {
  if (window.confirm("你确定要咋么做？")) {
    noteList.splice(index, 1);
  }
};
</script>

<template>
  <div class="note-container">
    <div class="note-wrap">
      <input
        type="text"
        class="note-input"
        placeholder="输入任务，按回车键确认"
        @keyup.enter="addNote($event)"
      />
      <ul v-show="noteList.length > 0" class="note-main">
        <li v-for="(item, index) in noteList" :key="index">
          <label>
            <span>{{ item }}</span>
          </label>
          <button v-show="true" class="btn btn-warning" @click="deleteNote">
            删除
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
