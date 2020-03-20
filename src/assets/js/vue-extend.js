/**
 * 全局属性
 */
import Vue from 'vue';
import constants from './constants';
import utils from './utils';

// 常量
Vue.prototype.$constants = constants;
// 工具
Vue.prototype.$utils = utils;
// 其他 ...
