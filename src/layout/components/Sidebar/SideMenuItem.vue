<!--
  功能：菜单子项
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月15日 16:31:57
-->
<template>
  <div class="i-layout-menu-side-submenu" v-if="!item.hidden && item.meta">
    <!-- children最多只包含一个元素，并且默认显示根路由 -->
    <template
      v-if="hasOneShowingChild(item.children, item) && !item.alwaysShow"
    >
      <MenuItem
        v-if="onlyOneChild.meta && onlyOneChild.meta.title"
        :name="resolvePath(onlyOneChild.path)"
        :to="resolvePath(onlyOneChild.path)"
        :target="onlyOneChild.meta.target"
      >
        <side-menu-title
          :icon="
            (onlyOneChild.meta && onlyOneChild.meta.icon) ||
            (item.meta && item.meta.icon)
          "
          :title="onlyOneChild.meta.title"
          :subtitle="onlyOneChild.meta.subtitle"
        />
        <!-- 子菜单的徽标 -->
        <Badge
          class="i-layout-menu-side-badge"
          v-if="badgeData"
          v-bind="badgeData"
        />
      </MenuItem>
    </template>
    <!-- children包含多个元素，继续遍历子元素 -->
    <Submenu v-else :name="resolvePath(item.path)">
      <template #title>
        <side-menu-title
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
          :subtitle="item.meta.subtitle"
        />
        <!-- 一级或多级父菜单的徽标 -->
        <Badge
          class="i-layout-menu-side-badge"
          v-if="badgeData"
          v-bind="badgeData"
        />
      </template>
      <side-menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </Submenu>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import path from "path-browserify";
import SideMenuTitle from "./SideMenuTitle.vue";
import { isExternal } from "@/utils/validate";
import useBadgesStore from "@/store/modules/badges";
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  basePath: {
    type: String,
    default: "",
  },
});
const onlyOneChild = ref(null);
const badgesStore = useBadgesStore();
//children中包含一个满足条件展示的子元素
const hasOneShowingChild = (children = [], parent) => {
  if (!children) {
    children = [];
  }
  // 获取children中非hidden的集合
  // debugger
  const showingChildren = children.filter((item) => !item.hidden);
  // 如果集合且只有一个元素则赋值给onlyOneChild
  if (showingChildren.length === 1) {
    onlyOneChild.value = showingChildren[0];
    return true;
  }
  // 如果集合没有元素，则onlyOneChild为父级
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent };
    return true;
  }
  return false;
};
//转换路径，会拼加basePath + 当前路径
const resolvePath = (routePath, rootPath) => {
  let basePath = props.basePath || rootPath;
  if (isExternal(basePath)) {
    return basePath;
  }
  if (isExternal(rootPath)) {
    return rootPath;
  }
  // 修复多级菜单下，如果包含子级的菜单多重复拼加当前routePath的问题
  basePath = basePath.replace(routePath, "");
  return path.resolve(basePath, routePath);
};
// 微标列表
const badgeData = computed(() => {
  let data = null,
    path = null;
  if (onlyOneChild.value && !props.item.alwaysShow) {
    path = resolvePath(onlyOneChild.value.path);
  } else {
    // 包含多个child
    path = resolvePath(props.item.path);
  }
  const badgeData = badgesStore.sidebarBadges.find(
    (item) => item.path === path
  );
  if (badgeData) data = badgeData;
  return data;
});
</script> 

<style scoped lang="less">
</style>

