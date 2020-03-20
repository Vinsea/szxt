import Vue from 'vue';
import Router from 'vue-router';

// 导入各个模块对应路由
import othersRouter from './routers/others';

// 路由懒加载
// 【注意】如果路由很多很多：将各个模块写在对应的js中，通过new Router()实例化后的对象的addRouters方法添加路由。
const Home = () =>
  import(/* webpackChunkName: "home" */ './views/Home.vue');

Vue.use(Router);

// vue-router3.*版后，如果用push跳转页面，需要catch一下报错信息，在这里统一加catch
const originalPush = Router.prototype.push;
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
  // mode: 'history', // https://router.vuejs.org/zh/guide/essentials/history-mode.html
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

// 添加各个模块路由
router.addRoutes(othersRouter);

/**
 * 导航守卫之 全局前置守卫（路由开始前拦截）
 */
router.beforeEach((to, from, next) => {
  console.log('页面跳转中... ', to);
  next();
});

/**
 * 导航守卫之 全局后置钩子（路由结束）
 */
router.afterEach((to, from) => {
  console.log('页面跳转成功！', `from '${from.fullPath}' --to--> '${to.fullPath}'`);
});

export default router;
