module.exports = {
  debug: true,
  static: {
    baseUrl: 'http://ysed.local.host/static/mp'
  },
  h5: {
    baseUrl: 'http://localhost:8080/web/mgop/gov-open/zj/2001985406/v2/'
  },
  api: {
    baseUrl: 'http://localhost:8020/msssjd',
  },
  ws: {
    server: 'ws://localhost:8020/msssjd',
  },
  // file: {
  //   size: 5242880, // 5M以内（保留配置）
  //   upload: 'http://172.20.203.128:8049/syrd-msssjd/api/common/file/upload',
  //   download: 'http://172.20.203.128:8049/syrd-msssjd/api/common/file/download'
  // }
}