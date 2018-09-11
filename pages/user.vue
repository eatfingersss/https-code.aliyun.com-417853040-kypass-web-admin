<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <List></List>
    </el-tab-pane>
    <el-tab-pane label="配置管理">
      <UserForm></UserForm>
    </el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
  import List from './user/list'
  import UserForm from './user/userForm'

  export default {
    name: 'user',
//        组件
    components: {
      List: List,
      UserForm: UserForm
    },
//        数据
    data() {
      return {
      }
    },
//        计算属性
    computed: {},
//        方法
    methods: {
    },
    mounted() {
    },
//         监听数据
    watch: {},
//         组件参数
    props: {}
  }
</script>

<style scoped>

</style>
