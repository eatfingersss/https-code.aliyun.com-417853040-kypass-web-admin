<template>
    <div>
      <i class="el-icon-edit">ID</i>
      <el-input v-model="data.id" placeholder="ID"></el-input>
      <el-button v-on:click="testApi()">切换</el-button>
      <br>
      <label for="title">标题</label>
      <!-- <input type="text" id="title" v-model="data.title"> -->
      <br>
      <label for="link">链接</label>
      <!-- <input type="text" id="link" v-model="data.link"> -->
      <br>
      <label for="content">内容</label>
      <!-- <input type="text" id="content" v-model="data.content"> -->
      <br>
      <button v-on:click="updateBook()">提交</button>
      <button v-on:click="createBook()">新增</button>
      <br>
      {{data}}
    </div>
</template>
<script>
  import requestApi from '../assets/js/requestApi.js'
  export default {
    name: 'demo',
//        组件
    components: {},
//        数据
    data() {
      return {
        data: {
          id: 244
        }
      }
    },
//        计算属性
    computed: {},
//        方法
    methods: {
      testApi: async function () {
        let obj = await requestApi.testApi(this, {id: this.data.id})
        this.data = obj.result
      },
      createBook: async function () {
        let obj = await requestApi.wRequest('/api/user', this, this.data)
        if (obj === true) {
          alert(obj)
        } else {
          alert(obj)
        }
      }
    },
    mounted() {
      this.testApi()
    },
//         监听数据
    watch: {},
//         组件参数
    props: {}
  }
</script>
<style scoped>
    /*……*/
</style>
