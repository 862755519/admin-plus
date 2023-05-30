<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月11日 13:56:31
-->
<template>
  <div class="i-layout-tabs">
    <div
      class="i-layout-tabs-left"
      @click="arrowBack"
      style="margin-right: 6px"
    >
      <Icon type="ios-arrow-back" size="16" />
    </div>
    <div class="i-layout-tabs-main" ref="tagMain">
      <div
        class="i-layout-tabs-main-box"
        ref="tagMainBox"
        :style="{ marginLeft: tabScroll }"
      >
        <div
          :class="[
            'i-layout-tabs-item',
            activeRoute.path == item.path ? 'i-layout-tabs-item-active' : '',
          ]"
          v-for="(item, index) in visitedViews"
          :key="item.path + index"
        >
          <Icon
            v-if="tabsViewIcon && item.meta.icon"
            :type="item.meta.icon"
            size="14"
            @click="handleTabClick(item.fullPath)"
            style="margin-right: 4px"
          />
          <span @click="handleTabClick(item.fullPath)">{{ item.title }}</span>
          <Icon
            type="md-close"
            size="14"
            v-if="!isAffix(item)"
            @click="handleTabRemove(item.fullPath)"
            style="margin-left: 6px; color: #999"
          />
        </div>
      </div>
    </div>
    <div
      class="i-layout-tabs-right"
      @click="arrowForward"
      style="margin-left: 6px"
    >
      <Icon type="ios-arrow-forward" size="16" />
    </div>
    <Dropdown>
      <div class="i-layout-tabs-right" style="margin-left: 6px">
        <Icon type="ios-arrow-down" size="16" />
      </div>
      <template #list>
        <DropdownMenu style="text-align: center">
          <DropdownItem @click="refreshCurrent">刷新页面</DropdownItem>
          <DropdownItem @click="closeCurrent">关闭当前</DropdownItem>
          <DropdownItem @click="closeLeft">关闭左侧</DropdownItem>
          <DropdownItem @click="closeRight">关闭右侧</DropdownItem>
          <DropdownItem @click="closeOther">关闭其他</DropdownItem>
          <DropdownItem @click="closeAll">全部关闭</DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, computed, onMounted } from "vue";
import path from "path-browserify";
import { useRoute, useRouter } from "vue-router";
import useTabsViewStore from "@/store/modules/tabsView";
import useSettingsStore from "@/store/modules/settings";
import usePermissionStore from "@/store/modules/permission";
import { Message } from "view-ui-plus";
//仓库实例化
const tabsViewStore = useTabsViewStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const route = useRoute();
const router = useRouter();
// 路由中affix=true的列表
const affixTabs = ref(null);
// 菜单列表
const sidebarRoutes = computed(() => {
  return permissionStore.sidebarRoutes;
});
// 打开的路由
const visitedViews = computed(() => {
  return tabsViewStore.visitedViews;
});
//需要缓存的路由
const cachedViews = computed(() => {
  return tabsViewStore.cachedViews;
});
//是否显示图标
const tabsViewIcon = computed(() => {
  return settingsStore.tabsViewIcon;
});
// 当前页面的路由
const activeRoute = computed(() => {
  return route;
});
//传参的路由是否是当前页面地址的一样
const isActive = (route) => {
  return route.path === route.path;
};
// 是否固定标签
const isAffix = (tab) => {
  return tab.meta && tab.meta.affix;
};
// 过滤出路由中affix=true需要固定在标签中的路由
const filterAffixTabs = (routes, basePath = "/") => {
  let tags = [];
  routes.forEach((route) => {
    if (route.meta && route.meta.affix) {
      const tabPath = path.resolve(basePath, route.path);
      tags.push({
        fullPath: tabPath,
        path: tabPath,
        name: route.name,
        meta: { ...route.meta },
      });
    }
    if (route.children) {
      const tempTabs = filterAffixTabs(route.children, route.path);
      if (tempTabs.length >= 1) {
        tags = [...tags, ...tempTabs];
      }
    }
  });
  return tags;
};
// 初始化标签页
const initTabs = () => {
  affixTabs.value = filterAffixTabs(sidebarRoutes.value);
  for (const tab of affixTabs.value) {
    // 必须要有name
    if (tab.name) {
      tabsViewStore.addVisitedView(tab);
    }
  }
};
// 添加新的tab
const addTabs = () => {
  const { name } = route;
  if (name) {
    tabsViewStore.addView(route);
  }
  return false;
};
/**
 * 关闭选择标签后的跳转操作
 * 1.如果是关闭所有的，则默认获取visitedViews中最后一个，没有则跳转到首页
 * 2.如果关闭当前路由标签，则默认获取visitedViews里当前关闭的下一个标签，没有则跳转到首页
 * 注：如果关闭非当前路由标签，则直接删除关闭的标签即可，不会调用该方法
 */
const toNextView = (visitedViews, index = -1) => {
  const nextView = visitedViews.slice(index)[0];
  if (nextView) {
    router.push(nextView.fullPath);
  } else {
    // 全部关闭后，如果没有任何标签，则默认跳转到首页
    nextTick(() => {
      router.replace({
        path: "/redirect/",
      });
    });
  }
};
//删除某一个tab
const handleTabRemove = (name) => {
  const view = visitedViews.value.find((item) => item.fullPath === name);
  const viewIndex = visitedViews.value.findIndex(
    (item) => item.fullPath === name
  );
  tabsViewStore.delView(view).then(({ visitedViews }) => {
    //关闭当前路由则跳转前一个路由
    if (isActive(view)) {
      toNextView(visitedViews, viewIndex);
    }
  });
};
//点击tab
const handleTabClick = (name) => {
  const view = visitedViews.value.find((item) => item.fullPath === name);
  const { fullPath } = view;
  tabsViewStore.delCachedView(view).then(() => {
    nextTick(() => {
      router.replace({
        path: "/redirect" + fullPath,
      });
    });
  });
};
//刷新当前路由页面
const refreshCurrent = () => {
  const { fullPath } = activeRoute.value;
  console.log("刷新页面");
  tabsViewStore.delCachedView(activeRoute.value).then(() => {
    nextTick(() => {
      router.replace({
        path: "/redirect" + fullPath,
      });
    });
  });
};
//关闭当前页面
const closeCurrent = () => {
  if (isAffix(activeRoute.value)) {
    Message.error("固定页签不可以关闭");
    return;
  }
  const viewIndex = visitedViews.value.findIndex(
    (item) => item.fullPath == activeRoute.value.path
  );
  tabsViewStore.delView(activeRoute.value).then(({ visitedViews }) => {
    // 关闭当前路由对应的标签则会调用
    if (isActive(activeRoute.value)) {
      toNextView(visitedViews, viewIndex);
    }
  });
};
//关闭左侧标签
const closeLeft = () => {
  tabsViewStore.delLeftViews(activeRoute.value);
};
//关闭右侧标签
const closeRight = () => {
  tabsViewStore.delRightViews(activeRoute.value);
};

//关闭其他
const closeOther = () => {
  tabsViewStore.delOthersViews(activeRoute.value);
};
/**
 * 关闭所有tab
 */
const closeAll = () => {
  tabsViewStore.delAllViews().then(({ visitedViews }) => {
    if (affixTabs.value.some((tag) => tag.path === route.path)) {
      return;
    }
    toNextView(visitedViews);
  });
};
// 元素节点
const tagMain = ref(null);
const tagMainBox = ref(null);
//移动的距离
const tabScroll = ref("0px");
//向左滑动
const arrowBack = () => {
  let offsetLeft = Math.abs(tagMainBox.value.offsetLeft); //移动距离
  if (offsetLeft === 0) {
    return;
  }
  if (offsetLeft > 240) {
    //移动距离大于父盒子宽度，向前移动一整个父盒子宽度
    console.log(111);
    tabScroll.value = -(offsetLeft - 240) + "px";
  } else {
    console.log(222);
    tabScroll.value = "0px"; // 否则移动到开始位置
  }
};
//向右滑动
const arrowForward = () => {
  let tabBoxWidth = tagMain.value.clientWidth; //盒子宽度
  let scrollWidth = tagMainBox.value.scrollWidth; //内容宽度
  // 必须要在循环的父级添加 定位样式, offsetLeft 获取元素相对带有定位父元素左边框的偏移
  let offsetLeft = Math.abs(tagMainBox.value.offsetLeft); //移动距离
  let diffWidth = scrollWidth - tabBoxWidth; //计算内容宽度与盒子宽度的差值
  if (offsetLeft >= diffWidth) {
    return;
  }
  if (diffWidth - offsetLeft > 240) {
    //判断差值减去移动距离是否大于盒子宽度 大于则滚动已移动距离+盒子宽度
    tabScroll.value = -(offsetLeft + 240) + "px";
  } else {
    tabScroll.value = -diffWidth + "px"; //小于则移动差值距离
  }
};
//监听路由变化
watch(
  () => router.currentRoute.value,
  () => {
    addTabs();
  }
);
//onMounted
onMounted(() => {
  initTabs();
  addTabs();
});
</script>
<style lang="less">
.i-layout-tabs {
  height: auto;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  padding: 10px 10px;
  height: auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &-left,
  &-right {
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #ffffff;
    color: #808695;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 21, 41, 0.04);
  }
  &-main {
    background: #f5f7f9;
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .i-layout-tabs-main-box {
    display: flex;
    align-items: center;
    transition: all 300ms linear;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0px;
    }
  }
  .i-layout-tabs-item {
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #ffffff;
    font-size: 14px;
    color: #808695;
    border-radius: 3px;
    padding: 0px 12px 0px 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 21, 41, 0.04);
    margin-right: 6px;
    flex-shrink: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      color: #515a6e;
    }
    &:last-child {
      margin-right: 0px !important;
    }
  }
  .i-layout-tabs-item-active {
    color: #2d8cf0;
    &:hover {
      color: #2d8cf0;
    }
  }
}
</style>
