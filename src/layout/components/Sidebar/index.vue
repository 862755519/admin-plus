<!--
  功能：左侧菜单栏
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 10:53:05
-->
<template>
  <div>
    <!-- logo -->
    <transition name="fade">
      <side-menu-logo v-show="hasLogo" />
    </transition>
    <!-- menu -->
    <Menu
      ref="menuElement"
      :theme="sideTheme"
      class="i-layout-menu-side i-scrollbar-hide"
      :class="{
        'i-layout-menu-side-collapse': isCollapsed,
        'i-layout-menu-side-has-logo': hasLogo,
      }"
      width="auto"
      :accordion="menuAccordion"
      :active-name="activeMenu"
      :open-names="openNames"
    >
      <!-- 菜单已展开 -->
      <!-- eslint-disable -->
      <template v-if="!isCollapsed">
        <side-menu-item
          v-for="(route, index) in sidebarRoutes"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </template>

      <!-- 菜单已折叠 -->
      <template v-else>
        <side-menu-collapse
          v-for="(route, index) in sidebarRoutes"
          :key="route.path + index"
          :item="route"
          top-level
          :base-path="route.path"
        />
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import SideMenuLogo from "./SideMenuLogo.vue";
import SideMenuItem from "./SideMenuItem.vue";
import SideMenuCollapse from "./SideMenuCollapse.vue";
import { useRoute, useRouter } from "vue-router";
import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";
import usePermissionStore from "@/store/modules/permission";
//仓库实例化
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
// 路由实例化
const route = useRoute();
const router = useRouter();
//展开的菜单
const openNames = ref([]);
//菜单节点
const menuElement = ref(null);
//激活的菜单
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
// 菜单手风琴
const menuAccordion = computed(() => {
  return settingsStore.menuAccordion;
});
//是否显示logo
const hasLogo = computed(() => {
  return settingsStore.sidebarLogo;
});
//菜单主题
const sideTheme = computed(() => {
  return settingsStore.sideTheme;
});
//是否折叠
const isCollapsed = computed(() => {
  return !appStore.sidebar.opened;
});
//菜单列表
const sidebarRoutes = computed(() => {
  return permissionStore.sidebarRoutes;
});
//初始化打开菜单
const initOpenNames = () => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title);
  let openNameArray = [];
  matched.forEach((v, i) => {
    openNameArray.push(v.path);
  });
  openNames.value = openNameArray;
};
//更新菜单组件的状态
const handleUpdateMenuState = () => {
  nextTick(() => {
    if (menuElement.value) {
      menuElement.value.updateActiveName();
      menuElement.value.updateOpened();
    }
  });
};
//监听路由变化
watch(
  () => router.currentRoute.value,
  () => {
    initOpenNames();
    handleUpdateMenuState();
  },
  { immediate: true, deep: true }
);
//监听面包屑配置变化
watch(
  () => isCollapsed.value,
  () => {
    initOpenNames();
    handleUpdateMenuState();
  }
);
</script>

