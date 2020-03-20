/**
 * Author:Vinsea.
 * CreateDate:2019/9/6 15:28.
 * Describe: 组装模块并导出 store
 * https://vuex.vuejs.org/zh/guide/state.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发时用严格模式

// ========================= 全局 单一状态树
const state = {
  loginId: '', // 登录用户ID
};

// ========================= 全局 store 的"计算属性"
const getters = {};

export default new Vuex.Store({
  strict: debug,
  getters,
  state,
  actions,
  mutations,
});
