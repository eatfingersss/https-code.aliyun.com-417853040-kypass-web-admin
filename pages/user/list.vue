<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="type"
        label="账户类型">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Form -->
<el-dialog title="编辑账户" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="账户类型" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择账户类型">
        <el-option label="超级管理员" value="shanghai"></el-option>
        <el-option label="学生" value="beijing"></el-option>
        <el-option label="教师" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="修改状态" :label-width="formLabelWidth">
      <el-button>冻结账号</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
  import requestApi from './../../assets/js/requestApi'
  export default {
    name: 'list',

    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      userList: async function () {
        let obj = await requestApi.getRequest('/api/user/list', this)
        this.tableData = obj.result
        for (let item of this.tableData) {
          if (item.type === 1) {
            item.type = '超级管理员'
          } else if (item.type === 2) {
            item.type = '教师'
          } else if (item.type === 3) {
            item.type = '学生'
          } else {
            item.type = '未知'
          }

          if (item.status === 0) {
            item.status = '未激活'
          } else if (item.status === 1) {
            item.status = '正常'
          } else if (item.status === -1) {
            item.status = '锁定'
          } else if (item.status === -2) {
            item.status = '冻结'
          } else if (item.status === -3) {
            item.status = '删除'
          } else {
            item.status = '未知'
          }
        }
      }
    },
    mounted() {
      console.log('11')
      this.userList()
    }
  }
</script>

<style scoped>

</style>
