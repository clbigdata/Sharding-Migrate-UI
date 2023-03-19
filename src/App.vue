<script lang="ts" setup>
import {defineComponent, reactive, ref} from 'vue';
import axios from "axios";
import CommonAside from "./components/CommonAside.vue";

const data = reactive({
  reslist: []
})

axios
    .get('https://api.apiopen.top/api/getImages?page=0&size=5')
    .then(function (response) {
      console.log(response.data.result.list)
      data.reslist = response.data.result.list
    })
    .catch(function (err) {
      console.log(err)
    })

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="180px">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.common-layout {
  height: 100%;
  &>.el-container {
    height: 100%;
    &>.el-aside {
      height: 100%;
      background: #545c64;
    }
    &>.el-container {
      &>.el-header {
        padding: 0%;
      }
    }
  }
}
</style>
