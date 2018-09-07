var qs = require('qs')

export default {
  wRequest: async function (url, obj, params) {
    if (params !== undefined) {
      // let param = qs.stringify(params)
      // let config = {
      //   headers: {'Content-Type': 'application/json'}
      // }
      let result = await obj.$axios.$post(url, params)
      // console.log('test api1 == ' + JSON.stringify(result.data))
      return result
    }
    let result = await obj.$axios.$post(url)
    // console.log('test api2 == ' + JSON.stringify(result.data))
    return result
  },
  getRequest: async function (url, obj, params) {
    if (params !== undefined) {
      let param = qs.stringify(params)
      let result = await obj.$axios.$get(url + '?' + param)
      // console.log('test api1 == ' + JSON.stringify(result.data))
      return result
    }
    let result = await obj.$axios.$get(url)
    // console.log('test api2 == ' + JSON.stringify(result.data))
    return result
  },
  putRequest: async function (url, obj, params) {
    if (params !== undefined) {
      // let param = qs.stringify(params)

      // let config = {
      //   headers: {'Content-Type': 'application/json'}
      // }
      let result = await obj.$axios.$put(url, params)
      // console.log('test api1 == ' + JSON.stringify(result.data))
      return result
    }
    let result = await obj.$axios.$put(url)
    // console.log('test api2 == ' + JSON.stringify(result.data))
    return result
  },
  // 获取轮播图片
  testApi(obj, params) { return this.getRequest('/api/user', obj, params) }
}
