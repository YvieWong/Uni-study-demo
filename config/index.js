const deepmerge = require('deepmerge')

/**
 * ** 特别提醒 **
 *
 * 请根据编译环境不同，设置`src/manifest.json`的`h5.router.base`
 *
 * - 浙里办：'/web/mgop/gov-open/zj/2001985406/v2/'
 * - 生产环境：'/mp/'
 */
const config = require('./' + process.env.NODE_ENV)

const defaultConfig = {
  name: 'yccs', // 应用名称
  nick: '云船测试', // 应用昵称
  // storage缓存的键名
  cache: {
    config: 'yccs-config', // 配置，第三方鉴权可根据配置进行回调
    auth: 'yccs-auth', // 鉴权，保持登录和自动登录
    trace: 'yccs-trace', // 跟踪，登录后自动跳转，匹配邀请码等
    theme: 'yccs-theme' // 样式：default = 常规版、care = 适老关怀版
  },
  // 服务提供者
  // provider: {
  //   adcode: '330604', // 行政区码，/api/system/area/list的pid
  //   department: '绍兴市上虞区人大常委会办公室', // 服务提供者名称
  //   tel: '0575-82206877' // 服务热线
  // },
  // 静态文件
  // static: {
  //   baseUrl: 'https://ysed.csdn.shangyu.gov.cn/static/mp'
  // },
  // H5页面，分享和二维码前缀及第三方鉴权跳回前缀
  // h5: {
  //   // **特别提醒**末尾斜杠的使用各有不同
  //   baseUrl: 'https://mapi.zjzwfw.gov.cn/web/mgop/gov-open/zj/2001985406/v2/index.html', // 浙里办
  // },
  // 服务端接口
  // api: {
  //   baseUrl: 'https://ysed.csdn.shangyu.gov.cn/open',
  //   query: { // 默认查询条件
  //     pageIndex: 1, // 页码
  //     pageSize: 10, // 每页数据条数
  //     level: '区级项目', // 项目级别
  //     year: new Date().getFullYear(), // 年份
  //   },
  // },
  // WebSocket服务器
  // ws: {
  //   server: 'wss//ysed.csdn.shangyu.gov.cn/open',
  // },
  // 文件访问
  // file: {
  //   size: 5242880, // 5M以内（保留配置）
  //   upload: 'https://ysed.csdn.shangyu.gov.cn/open/api/common/file/upload',
  //   download: 'https://ysed.csdn.shangyu.gov.cn/open/api/common/file/download',
  // },
  // 浙里办
  // zheliban: {
  //   app: 'zheliban', // 应用标识符，对应回调跳转：zheliban = 浙里办H5应用，mp = 政务网H5应用
  //   appName: '虞事e督', // 浙里办应用名称（保留）
  //   appId: '2001985406', // 浙里办应用ID（保留）
  //   serviceCode: 'ysed', // 浙里办接入码（保留）
  //   ssoApp: 'https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=ysed',
  // },
}

module.exports = deepmerge(defaultConfig, config)