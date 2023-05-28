<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月11日 13:58:52
-->
<template>
  <section class="app-main" :style="paddingStyle">
    <router-view :key="key" v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component
            v-if="!route.meta.link"
            :is="Component"
            :key="route.path"
          />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useTabsViewStore from "@/store/modules/tabsView";
import useSettingsStore from "@/store/modules/settings";
//仓库实例化
const tabsViewStore = useTabsViewStore();
const settingsStore = useSettingsStore();
const route = useRoute();
// 当开启tabsView才会起作用
const cachedViews = computed(() => {
  return tabsViewStore.cachedViews;
});
//显示标签页
const tabsView = computed(() => {
  return settingsStore.tabsView;
});
// 路由key
const key = computed(() => {
  return route.path;
});
//内容容器内边距
const paddingStyle = computed(() => {
  if (tabsView.value) {
    return "padding: 0px 10px 10px 10px";
  } else {
    return "padding: 10px;";
  }
});
</script>
<style lang="less" scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  min-height: calc(100vh - 240px);
  height: auto;
}
</style>
  
