/**
 * Author:Vinsea.
 * CreateDate:2019/7/31 14:30.
 * Describe: http库相关配置
 */

// 请求超时限制
Artery.ajax.defaults.timeout = 5000;

// 请求拦截器
Artery.ajax.interceptors.request.use(
  (request) => {
    // 统一给请求加公用头
    request.headers['appToken'] = 'appToken';
    return request;
  },
  (e) => {
    Artery.message.warning('请求异常', e);
  },
);

// 请求回调拦截器
Artery.ajax.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
