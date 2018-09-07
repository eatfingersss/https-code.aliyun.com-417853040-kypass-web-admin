export default function ({ $axios, req, redirect }) {
  $axios.onRequest(config => {
    // log.debug('=====================Some debug messages')
    if (req) {
      // console.log('on set Header:' + req.token)
      config.headers['d-token'] = req.token
      // config.headers['Access-Control-Allow-Origin'] = '*'
    }
  })
  $axios.onResponse(response => {
    if (response) {
      console.log('通用respons插件入口打印')
      // if (response.data.errorCode === 401) {
      //   // 表示没登录，需要登录，，跳转到登录页面
      // }
    }
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
