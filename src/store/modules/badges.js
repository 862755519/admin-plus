// 微标菜单
import { defineStore } from 'pinia'
import Cookies from "js-cookie";
//页面设置信息
const useBadgesStore = defineStore(
  'badges',
  {
    state: () => ({
      // 左侧菜单显示的徽标
      sidebarBadges: [
        // {
        //   path: "/workSpace/control",
        //   count: 8
        // }
        // {
        //   path: "/components-demo",
        //   text: "新特性",
        //   type: "warning"
        // },
        // // 子菜单显示徽标
        // {
        //   path: "/table/basic-table",
        //   count: 10,
        //   type: "success"
        // },
        // // 一级菜单显示徽标
        // {
        //   path: "/form",
        //   color: "#2db7f5"
        // }
      ]
    }),
    persist: false,
    actions: {
      //设置全部左侧微标
      setAllBadge(data) {
        this.sidebarBadges = data;
      },
      //新增或者修改某个的左侧菜单徽标
      setOneBadge(path, badge) {
        const sidebarBadges = JSON.parse(JSON.stringify(this.sidebarBadges));
        const currentIndex = sidebarBadges.findIndex(item => item.path === path);
        if (currentIndex >= 0) {
          sidebarBadges[currentIndex] = badge;
        } else {
          sidebarBadges.push(badge);
        }
        this.sidebarBadges = sidebarBadges;
      },
      //删除全部的左侧菜单徽标
      removeAllBadge() {
        this.sidebarBadges = [];
      },
      //删除某个左侧菜单徽标
      removeOneBadge(path) {
        const sidebarBadges = JSON.parse(JSON.stringify(this.sidebarBadges));
        const currentIndex = sidebarBadges.findIndex(item => item.path === path);
        if (currentIndex >= 0) sidebarBadges.splice(currentIndex, 1);
        this.sidebarBadges = sidebarBadges;
      }
    }
  })
export default useBadgesStore
