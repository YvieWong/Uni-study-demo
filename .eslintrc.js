module.exports = {
  extends: [
    'alloy',
    'alloy/vue',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    // myGlobal: false
    CONFIG: false, // webpack引入全局配置
    uni: false, // uniapp全局
    getApp: false, // uniapp全局
    aplus_queue: false // 浙里办
  },
  rules: {
    // Customize your rules
    'no-param-reassign': 'off',
    'vue/no-deprecated-filter': 'off',
    'vue/require-explicit-emits': 'off',
    'max-params': 5
  }
};