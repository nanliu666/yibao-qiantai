// 配置编译环境和线上环境之间的切换

let frontBaseUrl = '' // 用户前台地址
let backBaseUrl = '' //（后台管理）
let iconfontVersion = ['2232073_ivepzk6d68']
let iconfontUrl = '//at.alicdn.com/t/font_$key.css'
let codeUrl = `${frontBaseUrl}/code`
const env = process.env
if (location.host.indexOf('localhost') !== -1) {
  frontBaseUrl = 'http://localhost:1888' // 本地开发环境地址（用户前台）
} else if (env.VUE_APP_ENV == 'dev') {
  frontBaseUrl = 'http://172.16.4.55:7071' // 深圳本地开发环境地址（用户前台）
} else if (env.VUE_APP_ENV == 'sit') {
  frontBaseUrl = 'http://139.159.141.248:7071' // 线上sit环境地址（用户前台）
} else if (env.VUE_APP_ENV == 'production') {
  frontBaseUrl = 'http://user.epro-edu.com:7071' //生产环境地址（用户前台）
}
// if (env.VUE_APP_ENV == 'development') {
//   baseUrl = '' // 开发环境地址（用户前台）
// } else if (env.VUE_APP_ENV == 'production') {
//   baseUrl = '' //生产环境地址（用户前台）
// } else if (env.VUE_APP_ENV == 'test') {
//   baseUrl = '' //测试环境地址（用户前台）
// }
if (location.host.indexOf('localhost') !== -1) {
  backBaseUrl = 'http://localhost:1889' // 本地开发环境地址(后台管理)
} else if (env.VUE_APP_ENV == 'dev') {
  backBaseUrl = 'http://172.16.4.55:8081' // 深圳本地开发环境地址(后台管理)
} else if (env.VUE_APP_ENV == 'sit') {
  backBaseUrl = 'http://139.159.141.248:8081/' // 深圳本地开发环境地址(后台管理)
} else if (env.VUE_APP_ENV == 'production') {
  backBaseUrl = 'http://admin.epro-edu.com' //生产环境地址(后台管理)
}
export { frontBaseUrl, backBaseUrl, iconfontUrl, iconfontVersion, codeUrl, env }
