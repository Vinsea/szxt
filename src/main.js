import Vue from 'vue';
import router from './router'; // 路由
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './assets/styles/index.less'; // 公用样式
import './assets/js/vue-extend'; // 全局属性
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';

import BaseCard from './components/BaseCard';

Vue.use(ElementUI);
Vue.component(BaseCard.name, BaseCard);

Vue.config.productionTip = false; // 生产环境关闭提示

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
