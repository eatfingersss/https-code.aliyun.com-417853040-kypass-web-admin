<template>
  <el-tabs type="border-card">
    <el-tab-pane label="组织管理">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>aoaoaoaoaoao</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <OrganizationList></OrganizationList>
    </el-tab-pane>
   
    <el-tab-pane label="分组管理">
      <UserForm></UserForm>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import OrganizationList from './organization/organizationList'
  import OrganizationGroupList from './organization/organizationGroupList'

  export default {
    name: 'organization',
//        组件
    components: {
      OrganizationList: OrganizationList,
      OrganizationGroupList: OrganizationGroupList
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
