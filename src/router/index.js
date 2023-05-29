import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/Layout/index.vue';
export const constantRoutes = [
  /**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'name'                    // 设置该路由的图标，支持viewUI Plus官方图标
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
    affix: false                    //是否固定在tab栏，默认false
  }
 */
  // 重定向路由
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import('@/views/redirect.vue')
      }
    ]
  },
  // 登录
  {
    path: "/login",
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },

  // 错误页面
  {
    path: "/403",
    component: () => import("@/views/error/403.vue"),
    hidden: true
  },

  {
    path: "/404",
    component: Layout,
    component: () => import("@/views/error/404.vue"),
    hidden: true
  },
  {
    path: "/500",
    component: () => import("@/views/error/500.vue"),
    hidden: true
  },

  // 默认路由跳转到首页
  {
    path: "",
    redirect: "/home/index",
    component: Layout
  },
  //找不到页面跳转404
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true
  },
  // 首页
  {
    path: "/home",
    name: "home",
    component: Layout,
    redirect: "/home/index",
    meta: {
      title: "首页",
      icon: "md-home"
    },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页", subtitle: "Dashboard", affix: true, icon: "md-home" }
      }
    ]
  },
  //页面缓存
  {
    path: "/cache",
    name: "cache",
    component: Layout,
    redirect: "noRedirect",
    meta: {
      title: "页面缓存",
      icon: "ios-locate"
    },
    children: [
      {
        path: "cachePage",
        name: "cachePage",
        component: () => import("@/views/cache/cachePage.vue"),
        meta: { title: "有缓存的页面", subtitle: "", affix: false, icon: "", noCache: false }
      },
      {
        path: "noCachePage",
        name: "noCachePage",
        component: () => import("@/views/cache/noCachePage.vue"),
        meta: { title: "无缓存的页面", subtitle: "", affix: false, icon: "", noCache: true }
      }
    ]
  },

  //系统管理
  {
    path: "/system",
    name: "system",
    component: Layout,
    redirect: "noRedirect",
    meta: {
      title: "系统管理",
      icon: "logo-buffer"
    },
    children: [
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/system/menu/index.vue"),
        meta: { title: "菜单权限管理", subtitle: "", affix: false, icon: "" }
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/system/role/index.vue"),
        meta: { title: "角色权限管理", subtitle: "", affix: false, icon: "" }
      }
    ]
  },
  {
    path: "/list",
    name: "list",
    component: Layout,
    redirect: "noRedirect",
    meta: {
      title: "列表页面",
      icon: "md-reorder"
    },
    children: [
      {
        path: "base",
        name: "base",
        component: () => import("@/views/list/base/index.vue"),
        meta: { title: "基础列表", subtitle: "", affix: false, icon: "" }
      },
      {
        path: "card",
        name: "card",
        component: () => import("@/views/list/card/index.vue"),
        meta: { title: "卡片列表", subtitle: "", affix: false, icon: "" }
      },
      {
        path: "table",
        name: "table",
        component: () => import("@/views/list/table/index.vue"),
        meta: { title: "表格列表", subtitle: "", affix: false, icon: "" }
      }
    ]
  },
  //跳转外部链接
  // {
  //   path: "/goBing",
  //   name: "linkBiying",
  //   meta: { title: "当前窗口打开", icon: "ivu-icon-md-share", url:"https://cn.bing.com" }
  // },
  // {
  //   path: "/goBaidu",
  //   name: "linkBaidu",
  //   meta: { title: "打开新窗口", icon: "ivu-icon-md-link",url:"https://baidu.com.com", target: "_blank" }
  // }
];

//创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
