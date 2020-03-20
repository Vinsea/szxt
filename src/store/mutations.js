/**
 * Author:Vinsea.
 * CreateDate:2019/9/6 15:29.
 * Describe: 【根级别的 mutations】 (必须是同步函数)
 * https://vuex.vuejs.org/zh/guide/mutations.html
 */

import mutationType from './mutation-types';

// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {

  /**
   * 设置 当前登录人ID
   * @param state 状态树
   * @param loginId 登录id
   */
  [mutationType.SET_LOGINID] (state, loginId) {
    state.loginId = loginId;
  },

};
