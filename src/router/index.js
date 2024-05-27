import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/Layout/index.vue";
export const constantRoutes = [
  /**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题，注意每个路由的name不能相同
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
        component: () => import("@/views/redirect.vue"),
      },
    ],
  },
  // 登录
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
    hidden: true,
  },

  // 错误页面
  {
    path: "/403",
    component: () => import("@/views/error/403.vue"),
    meta: {
      title: "403",
    },
    hidden: true,
  },
  {
    path: "/500",
    component: () => import("@/views/error/500.vue"),
    meta: {
      title: "500",
    },
    hidden: true,
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: Layout,
    redirect: "noRedirect",
    alwaysShow: true,
    meta: {
      title: "动态配置组件",
      icon: "md-volume-up",
    },
    children: [
      {
        path: "/dynamic/table",
        name: "dynamic-table",
        component: () => import("@/views/dynamic/table/index.vue"),
        meta: {
          title: "动态表格页面",
          icon: "",
        },
      },
      {
        path: "/dynamic/form",
        name: "dynamic-form",
        component: () => import("@/views/dynamic/form/index.vue"),
        meta: {
          title: "动态表单页面",
          icon: "",
        },
      },
    ],
  },
  // 默认路由跳转到首页
  {
    path: "/",
    redirect: "/workSpace/control",
    component: Layout,
  },
  //找不到页面跳转404
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
    meta: {
      title: "404",
    },
    hidden: true,
  },
];
//创建路由实例
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});
export default router;
