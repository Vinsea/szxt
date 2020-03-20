/**
 * 项目代理配置
 * 用法：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
 */
module.exports = {
  '/artery': {
    target: 'http://localhost:8888/',
    changeOrigin: true,
  },
  '/api': {
    target: 'http://localhost:8080/',
    changeOrigin: true,
  },
}
