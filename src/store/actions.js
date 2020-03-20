/**
 * Author:Vinsea.
 * CreateDate:2019/9/6 15:29.
 * Describe: 【根级别的 action】 (提交 mutation,一般为异步函数)
 * https://vuex.vuejs.org/zh/guide/actions.html
 */

import mutationType from './mutation-types';

export default {

  /**
   * 根据权限生成路由表
   * @param context 与 store 实例具有相同方法和属性的 context 对象
   */
  getLoginId (context) {
    // 异步操作...
    context.commit(mutationType.SET_LOGINID, 'Vinsea');
  },

};
