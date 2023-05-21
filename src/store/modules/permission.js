import { defineStore } from 'pinia'
import { constantRoutes } from "@/router";
//过滤异步获取的路由菜单数据，组装成vue路由组件
function filterAsyncRoutes(asyncRoutes) {
    const res = [];
    asyncRoutes.forEach(route => {
        const tmp = { ...route };
        if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children);
        }
        res.push(tmp);
    });
    return res;
}
//页面设置信息
const usePermissionStore = defineStore(
    'permission',
    {
        state: () => ({
            routes: [], // 当前所有的路由数据
            addRoutes: [], // 获取到的异步路由数据
            sidebarRoutes: [] // 左侧菜单展示的路由数据，当开启topNav时候左侧路由需要过滤
        }),
        actions: {
            // 充值路由
            resetRoutes() {
                this.routes = [];
                this.addRoutes = [];
                this.sidebarRoutes = [];
            },
            //设置路由
            setRoutes(routes) {
                this.addRoutes = routes
                this.sidebarRoutes = constantRoutes.concat(routes);
                this.routes = constantRoutes.concat(routes)
            },
            //设置左侧菜单路由
            setSidebarRoutes(routes) {
                this.sidebarRoutes = routes
            },
            // 解析路由数据
            generateRoutes(asyncRoutes) {
                return new Promise(resolve => {
                    const accessRoutes = filterAsyncRoutes(asyncRoutes);
                    this.setRoutes(accessRoutes);
                    resolve(accessRoutes);
                });
            },
            // 开启topNav后，通过点击的菜单，筛选出来对应的路由并保存
            changeSidebarRoutes(sidebarRoutes) {
                this.setSidebarRoutes(sidebarRoutes);
            }

        }
    })

export default usePermissionStore
