<!--
  功能：logo区域
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 10:54:26
-->
<template>
  <div
    id="i-layout-sider-logo"
    class="i-layout-sider-logo"
    :class="logoClasses"
  >
    <router-link
      v-if="isCollapsed"
      key="collapse"
      class="i-layout-sider-logo-link"
      to="/"
    >
      <img v-if="logo" :src="logo" class="sider-logo-img" />
      <h1 v-else class="sider-logo-title">
        {{ title }}
      </h1>
    </router-link>
    <router-link v-else key="expand" class="i-layout-sider-logo-link" to="/">
      <img v-if="logo" :src="logo" class="sider-logo-img" />
      <h1 class="sider-logo-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import defaultSettings from "@/settings";
import logo from "@/assets/images/logo.png";
import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";
//仓库实例化
const settingsStore = useSettingsStore();
const appStore = useAppStore();
//应用名称
const title = ref(defaultSettings.sidebarLogoTitle);
//是否收起菜单
const isCollapsed = computed(() => {
  return !appStore.sidebar.opened;
});
//logo样式
const logoClasses = computed(() => {
  return {
    "i-layout-sider-logo-collapse": isCollapsed.value,
    "i-layout-sider-logo-dark": settingsStore.sideTheme === "dark",
    "i-layout-sider-logo-light": settingsStore.sideTheme === "light",
  };
});
</script> 

<style scoped lang="less">
@import "@/styles/variables.less";

.i-layout-sider-logo {
  position: relative;
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  transition: all 0.2s ease-in-out;

  &-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .sider-logo-img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      margin-right: 10px !important;
    }

    .sider-logo-title {
      display: inline-block;
      margin: 0;
      font-weight: lighter !important;
      line-height: 64px;
      font-size: 24px;
      vertical-align: middle;
    }
  }

  &-collapse {
    .sider-logo-img {
      margin-right: 0px !important;
    }
  }

  // dark和light主题色
  &-dark {
    background: @base-dark-bg;
    & .sider-logo-title {
      color: #dcdee2 !important;
    }
  }
  &-light {
    transition: all 0.2s ease-in-out;
    background: #fff;
    & .sider-log-title {
      color: #515a6e !important;
    }
  }
}
</style>
