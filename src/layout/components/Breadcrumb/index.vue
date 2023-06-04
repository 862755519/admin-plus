<!--
  功能：面包屑
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月11日 08:54:03
-->
<template>
  <Breadcrumb
    id="i-layout-navbar-breadcrumb"
    class="i-layout-navbar-breadcrumb"
    separator="/"
  >
    <BreadcrumbItem v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        noRedirect
        class="no-redirect"
      >
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { compile } from "path-to-regexp";
import { useRoute, useRouter } from "vue-router";
import useSettingsStore from "@/store/modules/settings";
//面包屑数据
const levelList = ref([]);
const route = useRoute();
const router = useRouter();
const settingsStore = useSettingsStore();
//系统配置
const rootHome = computed(() => {
  return settingsStore.rootHome;
});
const isHome = (route) => {
  const name = route && route.name;
  if (!name) return false;
  return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase();
};
//获取面包屑数据
const getBreadcrumb = () => {
  // only show routes with meta.title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  const first = matched[0];
  // 如果当前路由是非首页，则面包屑最开始追加首页的链接
  if (!isHome(first)) {
    // 设置里显示根首页，会拼加到第一个
    if (rootHome.value) {
      matched = [{ path: "/workSpace/control", meta: { title: "主控台" } }].concat(
        matched
      );
    }
  } else {
    // 如果当前路由是首页，则面包屑只保留一个首页链接
    matched = [{ path: "/workSpace/control", meta: { title: "主控台" } }];
  }
  // 匹配出来的路由链接列表
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
};
//路径处理
const pathCompile = (path) => {
  const { params } = route;
  var toPath = compile(path);
  return toPath(params);
};
//跳转
const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(pathCompile(path));
};
//监听路由变化
watch(
  () => router.currentRoute.value,
  () => {
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    getBreadcrumb();
  },
  { immediate: true, deep: true }
);
//监听面包屑配置变化
watch(
  () => rootHome,
  () => {
    getBreadcrumb();
  }
);
</script>

<style scoped lang="less">
.i-layout-navbar-breadcrumb {
  display: inline-block;
  line-height: 60px;
  padding: 0px 10px;
  font-size: 15px;
  font-weight: 600;
  .no-redirect {
    color: #808695;
    cursor: text;
    font-weight: normal;
  }
}
</style>
