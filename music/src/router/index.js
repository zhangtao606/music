import Vue from 'vue'
import Router from 'vue-router'
// 配置所有页面路由路径

Vue.use(Router)
Vue.use(require('vue-wechat-title')); //实例化参数动态改变title
export default new Router({
  routes: [
  // 默认首路径即是首页的页面
    {
      path: '/',
      name: 'Index',
      meta: { title: '首页' },
      component: resolve => require(['@/pages/Index'], resolve)//异步加载组件
    },
    // 分类
    {
    	path: '/list',
    	name: 'List',
    	meta: { title: '分类' },
    	component: resolve => require(['@/pages/List'], resolve)
    },
    //个人中心
    {
    	path: '/my',
    	name: 'My',
    	meta: { title: '我的' },
    	component: resolve => require(['@/pages/My'], resolve)
    },
    {
      path: '/journalList',
      name: 'JournalList',
      meta: { title: '日志列表' },
      component: resolve => require(['@/pages/JournalList'], resolve)
    }  
  ]
})
