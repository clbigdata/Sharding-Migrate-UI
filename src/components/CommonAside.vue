<template>
  <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :collapse-transition="false"
           active-text-color="#ffd04b">
    <h3>后台管理</h3>
    <el-menu-item :index="item.path+''" v-for="item in list" :key="item.label">
      <component class="icons" :is="item.icon"></component>
      <span>{{item.label}}</span>
    </el-menu-item>
  </el-menu>
</template>


<script>
export default {
  setup() {
    const list = [
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'UserOutlined',
        url: '/user'
      },
      {
        path: '/datasource',
        name: 'datasource',
        label: '数据源管理',
        icon: 'DatabaseOutlined',
        url: '/datasource'
      },
      {
        path: '/migrateconfig',
        name: 'migrateconfig',
        label: '迁移配置',
        icon: 'SettingOutlined',
        url: '/migrateconfig'
      },
      {
        path: '/migratejob',
        name: 'migratejob',
        label: '迁移任务',
        icon: 'DashboardOutlined',
        url: '/migratejob'
      },
      {
        label: '其它',
        name: 'other',
        icon: 'SmileTwoTone',
        path: '/other',
        url: 'other'
      },
    ];
    return {
      list,
    }
  }
}
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.el-menu-vertical-demo {
  width: 100%;
  border-right: none;
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
</style>