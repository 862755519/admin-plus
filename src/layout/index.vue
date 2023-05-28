<!--
  功能：页面布局
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月09日 15:48:17
-->
<template>
  <Layout class="app-layout" :class="layoutClasses">
    <Sider
      v-if="!isMobile"
      class="i-layout-sider"
      :class="siderClasses"
      v-model="isCollapsed"
      hide-trigger
      :width="sideBarWidth"
      :collapsed-width="64"
      collapsible
    >
      <Sidebar />
    </Sider>
    <Layout class="i-layout-main" :class="mainClasses">
      <Header class="i-layout-header" :class="headerClasses">
        <Navbar />
        <TabsView v-if="tabsView" />
      </Header>
      <Content class="i-layout-content" :class="contentClasses">
        <AppMain />
        <Footer />
      </Content>
    </Layout>

    <div v-if="isMobile">
      <Drawer
        v-model="showSiderDrawer"
        placement="left"
        :closable="false"
        :class-name="drawerClasses"
        @on-close="handleDrawerClose"
      >
        <Sidebar />
      </Drawer>
    </div>
  </Layout>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import { computed, watch, watchEffect } from "vue";
import defaultSettings from "@/settings.js";
import { useRouter } from "vue-router";
import {
  Sidebar,
  Navbar,
  TabsView,
  AppMain,
  Footer,
} from "./components/index.js";
import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";
// 实例化路由
const router = useRouter();
//仓库实例化
const settingsStore = useSettingsStore();
const appStore = useAppStore();
//菜单展开宽度
const sideBarWidth = computed(() => {
  return defaultSettings.sideBarWidth;
});
//设备类型
const isMobile = computed(() => {
  return appStore.device === "mobile";
});
//是否收起菜单
const isCollapsed = computed(() => {
  return !appStore.sidebar.opened;
});
//展示抽屉
const showSiderDrawer = computed(() => {
  return appStore.sidebar.opened;
});
//是否显示标签
const tabsView = computed(() => {
  return settingsStore.tabsView;
});
//主框架样式
const layoutClasses = computed(() => {
  return {
    mobile: appStore.device === "mobile",
    tablet: appStore.device === "tablet",
  };
});
//菜单样式
const siderClasses = computed(() => {
  return {
    "i-layout-sider-dark": settingsStore.sideTheme === "dark",
    "i-layout-sider-light": settingsStore.sideTheme === "light",
    "i-layout-sider-fix": settingsStore.fixedSidebar,
  };
});
//主要内容样式
const mainClasses = computed(() => {
  return {
    "i-layout-main-with-sider-fix": settingsStore.fixedSidebar,
    "i-layout-main-with-sider-fix-collapse":
      settingsStore.fixedSidebar && isCollapsed.value,
    "i-layout-main-with-mobile": isMobile.value,
  };
});
//头部样式
const headerClasses = computed(() => {
  return {
    "i-layout-header-fix": settingsStore.fixedHeader,
    "i-layout-header-with-sider-fix": settingsStore.fixedSidebar,
    "i-layout-header-fix-with-sider-collapse":
      settingsStore.fixedHeader && isCollapsed.value,
    "i-layout-header-fix-with-tabs":
      settingsStore.fixedHeader && settingsStore.tabsView,
    "i-layout-header-with-mobile": isMobile.value,
  };
});
//内容样式
const contentClasses = computed(() => {
  return {
    "i-layout-content-with-header-fix": settingsStore.fixedHeader,
    "i-layout-content-with-header-fix-with-tabs":
      settingsStore.fixedHeader && settingsStore.tabsView,
  };
});
//菜单抽屉样式
const drawerClasses = computed(() => {
  let className = "i-layout-drawer-sider-fix";
  if (settingsStore.sideTheme === "dark") className += " i-layout-drawer-dark";
  return className;
});
//关闭手机抽屉
const handleDrawerClose = () => {
  appStore.closeSideBar();
};
// mobile设备
const MOBILE_MAX_WIDTH = 640;
// 平板设备
const TABLET_MAX_WIDTH = 992;
// 窗口尺寸
const { width } = useWindowSize();

watchEffect(() => {
  const isMobile = width.value - 1 < MOBILE_MAX_WIDTH;
  const isTablet = width.value - 1 < TABLET_MAX_WIDTH;
  // 设置设备类型
  appStore.toggleDevice(isMobile ? "mobile" : isTablet ? "tablet" : "desktop");
  // 如果是手机和平板，则默认折叠左侧
  if (isMobile || isTablet) {
    appStore.closeSideBar();
  }
});
//监听路由变化
watch(
  () => router.currentRoute.value,
  () => {
    // 是手机设备，每次切换路由页面则隐藏菜单
    if (isMobile.value && !isCollapsed.value) {
      appStore.closeSideBar();
    }
  }
);
</script> 

<style lang="less">
@import "@/styles/variables.less";

// layout布局
.app-layout {
  height: auto;
}
// 左侧sider布局
.i-layout-sider {
  z-index: 11;
  // 侧边栏主题
  &-dark {
    background: @base-dark-bg !important;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.25);
  }
  &-light {
    background: #fff !important;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);
  }
  // 固定侧边栏
  &-fix {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

// 右侧main布局
.i-layout-main {
  min-height: 100vh;
  transition: all 0.2s ease-in-out;

  &-with-sider-fix {
    margin-left: @base-sider-width;
    &-collapse {
      margin-left: 64px;
    }
  }

  // 手机设备
  &-with-mobile {
    transition: none;
    margin-left: 0px;
  }

  // header布局
  .i-layout-header {
    padding: 0px;
    height: auto;
    line-height: 0;
    background: #f5f7f9;
    z-index: 9;
    transition: all 0.2s ease-in-out;
    &-fix {
      position: fixed;
      top: 0;
      right: 0;
      left: @base-sider-width;
      width: calc(~"100% - @{base-sider-width}");
      &-with-sider-fix {
        left: @base-sider-width;
        width: calc(~"100% - @{base-sider-width}");
      }
      &-with-sider-collapse {
        left: 64px;
        width: calc(100% - 64px);
      }
      &-with-tabs {
        z-index: 10;
      }
    }
    // 手机设备
    &-with-mobile {
      transition: none;
      left: 0px;
      width: 100%;
    }
  }

  // content布局
  .i-layout-content {
    transition: all 0.2s ease-in-out;
    &-with-header-fix {
      padding-top: 64px;
      &-with-tabs {
        padding-top: 116px;
      }
    }
  }
}

// drawer样式
.i-layout-drawer-sider-fix {
  .ivu-drawer-body {
    padding: 0;
    overflow: visible;
  }
}
</style>