/**
 * 常量模块
 */

export default {
  about: '只是一个示例页面',
  treeData: [
    {
      id: '1',
      name: 'public',
      open: true,
      children: [
        {
          id: '1-1',
          name: 'favicon.ico —— 浏览器图标',
        },
        {
          id: '1-2',
          name: 'index.html —— html入口',
        },
      ],
    },
    {
      id: '2',
      name: 'src',
      open: true,
      children: [
        {
          id: '2-1',
          name: 'assets —— 资源文件夹',
          open: true,
          children: [
            {
              id: '2-1-1',
              name: 'images —— 项目中用到的图片',
              open: true,
              children: [
                {
                  id: '2-1-1-1',
                  name: 'common —— 公共图片',
                },
                {
                  id: '2-1-1-2',
                  name: 'header —— header组件中的图片',
                },
                {
                  id: '2-1-1-3',
                  name: 'views —— 各个页面的对应的自己的图片',
                },
              ],
            },
            {
              id: '2-1-2',
              name: 'js',
              open: true,
              children: [
                {
                  id: '2-1-2-1',
                  name: 'mixins —— 混入',
                },
                {
                  id: '2-1-2-2',
                  name: 'utils —— 工具（可以细分 也可以都写到index.js）',
                },
                {
                  id: '2-1-2-3',
                  name: 'constants.js —— 常量',
                },
                {
                  id: '2-1-2-4',
                  name: 'vue-extend.js —— 对Vue原型扩展全局属性',
                },
              ],
            },
            {
              id: '2-1-3',
              name: 'styles',
              open: true,
              children: [
                {
                  id: '2-1-3-1',
                  name: 'animation —— 动画库',
                },
                {
                  id: '2-1-3-2',
                  name: 'common —— 公共样式',
                  open: true,
                  children: [
                    {
                      id: '2-1-3-2-1',
                      name: 'config.less —— 公共配置信息、变量（在vue.config.js中设置为了全局可引用）',
                    },
                    {
                      id: '2-1-3-2-2',
                      name: 'layout.less —— 页面布局的样式',
                    },
                  ],
                },
                {
                  id: '2-1-3-3',
                  name: 'components —— 项目中组件的样式',
                  open: true,
                  children: [
                    {
                      id: '2-1-3-3-1',
                      name: 'cover-ui-library.less —— 覆盖UI组件库的样式',
                    },
                  ],
                },
                {
                  id: '2-1-3-4',
                  name: 'views —— 每个页面对应的样式',
                },
              ],
            },
          ],
        },
        {
          id: '2-2',
          name: 'components —— 项目中提出的组件',
        },
        {
          id: '2-2.1',
          name: 'config —— 配置相关的文件',
          open: true,
          children: [
            {
              id: '2-2.1-1',
              name: 'proxy —— 代理配置文件',
            },
            {
              id: '2-2.1-2',
              name: 'http —— HTTP库配置',
            },
          ],
        },
        {
          id: '2-3',
          name: 'routers —— 页面对应的各个路由模块',
        },
        {
          id: '2-4',
          name: 'views —— 页面',
        },
        {
          id: '2-5',
          name: 'App.vue',
        },
        {
          id: '2-6',
          name: 'main.js',
        },
        {
          id: '2-7',
          name: 'router.js —— 路由主文件',
        },
      ],
    },
    {
      id: '3',
      name: '.eslintrc.js —— 符合公司前端规范的eslint规则',
    },
    {
      id: '4',
      name: 'babel.config.js —— babel7配置文件',
    },
  ],
};
