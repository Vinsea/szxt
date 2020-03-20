/**
 * 覆盖webpack默认配置信息：https://cli.vuejs.org/zh/config/#vue-config-js
 */
const path = require('path');
const proxyList = require('./src/config/proxy');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  productionSourceMap: false,

  devServer: {
    port: 8919, // 919，大连华宇生日
    host: '0.0.0.0',
    https: false,
    open: true, // 自动启动浏览器
    proxy: proxyList, // 代理
  },

  chainWebpack: (config) => {
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
    config.plugins
      .delete('prefetch');
    // config.entry('index').add('babel-polyfill');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@css', resolve('src/assets/styles'))
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局less配置
        path.resolve(__dirname, './src/assets/styles/common/config.less'),
      ],
    },
  },
};
