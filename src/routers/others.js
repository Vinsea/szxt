/**
 * 跟业务无关的其他页面
 */
const About = () =>
  import(/* webpackChunkName: "about" */ '@/views/others/About.vue');

export default [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];
