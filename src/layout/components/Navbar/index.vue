<!--
  功能：头部
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 15:53:56
-->
<template>
  <div class="i-layout-navbar">
    <!-- 折叠左侧菜单 -->
    <Hamburger class="i-layout-navbar-trigger" />
    <!-- 刷新当前页面 -->
    <RefreshPage class="i-layout-navbar-trigger" />
    <!-- 面包屑导航 -->
    <Breadcrumb v-if="!isMobile" />

    <!-- 右侧菜单 -->
    <div class="i-layout-navbar-right-menu">
      <!-- 页面全屏 -->
      <Fullscreen v-if="!isMobile" class="i-layout-navbar-trigger" />
      <!-- 系统通知 -->
      <Notify class="i-layout-navbar-trigger" />
      <!-- 用户登录信息 -->
      <UserAvatar class="i-layout-navbar-trigger" />
      <!-- 系统设置 -->
      <Settings class="i-layout-navbar-trigger" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useAppStore from "@/store/modules/app";
import Hamburger from "../Hamburger/index.vue";
import RefreshPage from "../RefreshPage/index.vue";
import Breadcrumb from "../Breadcrumb/index.vue";
import Fullscreen from "../Fullscreen/index.vue";
import Notify from "../Notify/index.vue";
import UserAvatar from "../UserAvatar/index.vue";
import Settings from "../Settings/index.vue";
//仓库实例化
const appStore = useAppStore();
//设备类型
const isMobile = computed(() => {
  return appStore.device === "mobile";
});
</script> 

<style scoped lang="less">
.i-layout-navbar {
  height: 64px;
  line-height: 64px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  // trigger鼠标滑过样式
  &-trigger {
    transition: background 0.3s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.035);
    }
  }

  // 右侧按钮菜单样式
  &-right-menu {
    float: right;
    height: 100%;
    line-height: 64px;
  }
}
</style>
