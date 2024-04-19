import router from "./router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import defaultSettings from "@/settings.js";
import useUserStore from "@/store/modules/user";
import useSettingsStore from "@/store/modules/settings";
import usePermissionStore from "@/store/modules/permission";
import { getToken } from "@/utils/auth"; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // 路由白名单

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  //实例化仓库
  const userStore = useUserStore();
  const settingsStore = useSettingsStore();
  const permissionStore = usePermissionStore();
  // start progress bar
  NProgress.start();
  // 设置页面标题（如果开启了动态标题则会拼加路由的title）
  to.meta.title && settingsStore.changeDynamicTitle(to.meta.title);
  document.title = `${settingsStore.dynamicTitle} - ${defaultSettings.title}`;
  // 获取登录的token
  const hasToken = getToken();
  if (hasToken && userStore.menuList && userStore.menuList.length > 0) {
    if (to.path === "/login") {
      // 如果已经登录，地址栏输入login，则默认跳转到首页
      next({ path: "/" });
      NProgress.done();
    } else {
      //拉取过权限路由菜单，不再添加
      if (permissionStore.addRoutes.length > 0) {
        next();
      } else {
        let asyncRoutes = [];
        if (userStore.menuList) {
          asyncRoutes = JSON.parse(JSON.stringify(userStore.menuList));
        }
        // 权限路由
        const accessRoutes = await permissionStore.generateRoutes(asyncRoutes);
        // 根据roles权限生成可访问的路由表
        accessRoutes.forEach((route) => {
          router.addRoute(route); // 动态添加可访问路由表
        });
        next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
      }
    }
  } else {
    // 没有token
    // 在白名单中的路由地址正常跳转
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      // 不在白名单，并且没有登录的token则跳转到login，并且地址带入redirect来源
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done();
});
