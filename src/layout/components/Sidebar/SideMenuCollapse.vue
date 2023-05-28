<template>
  <div
    v-if="!item.hidden && item.meta"
    :class="{
      'i-layout-menu-side-collapse-top-level': topLevel,
      'i-layout-menu-side-collapse-dark': sideTheme === 'dark' && topLevel,
      'i-layout-menu-side-collapse-light': sideTheme === 'light' && topLevel,
    }"
  >
    <!-- children最多只包含一个元素，并且默认显示根路由 -->
    <Tooltip
      v-if="
        hasOneShowingChild(item.children, item) && !item.alwaysShow && topLevel
      "
      transfer
      :content="onlyOneChild.meta && onlyOneChild.meta.title"
      placement="right"
    >
      <side-menu-link
        class="ivu-menu-item"
        :class="{
          'i-layout-menu-side-collapse-top-level-item': true,
          'i-layout-menu-side-collapse-top-level-item-selected':
            activeMenu.includes(resolvePath(onlyOneChild.path)),
        }"
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path, item.path)"
      >
        <side-menu-title
          :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
        />
      </side-menu-link>
    </Tooltip>

    <!-- children包含多个元素，继续遍历子元素 -->
    <Dropdown v-else placement="right-start">
      <!-- 左侧收缩后一级菜单展示的图标 -->
      <li
        class="ivu-menu-item"
        :class="{
          'i-layout-menu-side-collapse-top-level-item': topLevel,
          'i-layout-menu-side-collapse-top-level-item-selected':
            openNames.includes(resolvePath(item.path)),
        }"
        v-if="topLevel"
      >
        <side-menu-title :icon="item.meta && item.meta.icon" />
      </li>

      <!--左侧栏一级菜单弹出的子菜单 -->
      <li
        class="ivu-dropdown-item"
        :class="{
          'ivu-menu-item-selected ivu-menu-item-active': openNames.includes(
            resolvePath(item.path)
          ),
        }"
        v-else
      >
        <side-menu-title
          :icon="item.meta && item.meta.icon"
          :title="item.meta && item.meta.title"
          :subtitle="item.meta && item.meta.subtitle"
        />
        <Icon type="ios-arrow-forward" class="ivu-dropdown-item-arrow" />
      </li>
      <template #list>
        <DropdownMenu>
          <!-- 是否展示父级菜单的名称 -->
          <div
            v-if="menuCollapseParentTitle"
            class="ivu-dropdown-item ivu-dropdown-show-parent"
          >
            <side-menu-title
              :icon="item.meta && item.meta.icon"
              :title="item.meta && item.meta.title"
            />
          </div>
          <!-- 下拉菜单 -->
          <template v-for="(child, index) in item.children">
            <side-menu-link
              v-if="!child.children"
              :key="child.path + index"
              :to="resolvePath(child.path)"
            >
              <DropdownItem
                :divided="child.meta.divided"
                :class="{
                  'ivu-menu-item-selected ivu-menu-item-active':
                    openNames.includes(resolvePath(child.path)),
                }"
              >
                <side-menu-title
                  :icon="child.meta && child.meta.icon"
                  :title="child.meta && child.meta.title"
                  :subtitle="child.meta && child.meta.subtitle"
                />
              </DropdownItem>
            </side-menu-link>
            <side-menu-collapse
              v-else
              :item="child"
              :key="child.path + index"
              :base-path="resolvePath(child.path)"
            />
          </template>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import path from "path-browserify";
import { isExternal } from "@/utils/validate";
import { useRoute, useRouter } from "vue-router";
import SideMenuTitle from "./SideMenuTitle.vue";
import SideMenuLink from "./SideMenuLink.vue";
import useSettingsStore from "@/store/modules/settings";
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  basePath: {
    type: String,
    default: "",
  },
  //是否是第一级，区分在于左侧固定和弹出菜单
  topLevel: {
    type: Boolean,
    default: false,
  },
});
const route = useRoute();
const settingsStore = useSettingsStore();
const onlyOneChild = ref(null);
//主题
const sideTheme = computed(() => {
  return settingsStore.sideTheme;
});
//菜单折叠时，是否在子菜单显示父级菜单名称
const menuCollapseParentTitle = computed(() => {
  return settingsStore.menuCollapseParentTitle;
});
//激活的菜单
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
//展开的菜单
const openNames = computed(() => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title);
  let openNames = [];
  matched.forEach((v, i) => {
    openNames.push(v.path);
  });
  return openNames;
});
//children中包含一个满足条件展示的子元素
const hasOneShowingChild = (children = [], parent) => {
  if (!children) {
    children = [];
  }
  // 获取children中非hidden的集合
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
</script>


