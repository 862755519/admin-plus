import Layout from '@/Layout/index.vue';
/**
 * 异步路由列表，模拟后台加载菜单后生成的路由数据
 */
export const asyncRoutes = [
  // 列表页面
  {
    path: "/table",
    component: Layout,
    redirect: "/table/basic",
    meta: {
      title: "列表页面",
      icon: "logo-buffer"
    },
    alwaysShow: true,
    children: [
      {
        path: "basic",
        name: "Basic",
        component: () => import("@/views/table/basic.vue"),
        meta: {
          title: "基础列表"
        }
      },
      {
        path: "drag",
        name: "Drag",
        component: () => import("@/views/table/drag.vue"),
        meta: {
          title: "列表拖拽"
        }
      },
      {
        path: "inline-edit",
        name: "InlineEdit",
        component: () => import("@/views/table/inlineEdit.vue"),
        meta: {
          title: "行内编辑"
        }
      }
    ]
  },
  // // 跳转外部链接
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
