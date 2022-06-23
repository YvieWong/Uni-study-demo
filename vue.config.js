const TerserPlugin = require('terser-webpack-plugin')
const config = require('./config')

module.exports = {
  transpileDependencies: [
    'uview-ui',
    'luch-request',
    'querystringify',
    'dayjs',
    // 'crypto-js/md5',
    // '@dcloudio/uni-ui',
    'miniprogram-sm-crypto',
    'jwt-decode',
    'html-escaper'
  ],
  chainWebpack: webpack => {
    webpack.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        CONFIG: JSON.stringify(config)
      })
      return definitions
    })
  },
  configureWebpack: {
    devServer: {
      disableHostCheck: true,
      // proxy: {
      //   // 配置跨域
      //   '/api2': {
      //     target: 'https://www.uinav.com',
      //     ws: true,
      //     changOrigin: true,
      //     pathRewrite: {
      //       '^/api2': ''
      //     }
      //   }
      // }
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: config.debug,
              drop_debugger: false,
              pure_funcs: config.debug ? ['console.log'] : undefined, // 移除console
            }
          }
        })
      ]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // additionalData: sass-loader >= 10
        prependData: `
          $static-base-url: '${config.static.baseUrl}';
          @import 'uni.scss';
        `
      }
    }
  }
}