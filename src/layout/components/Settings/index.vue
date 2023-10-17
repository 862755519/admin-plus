<template>
  <div
    id="i-layout-navbar-settings"
    class="i-layout-navbar-settings"
    @click.stop="showSettings = true"
  >
    <!-- 更多设置 -->
    <Icon class="i-icon" type="md-more" />

    <!-- 布局设置 -->
    <Drawer v-model="showSettings" title="布局设置预览" :width="280">
      <!-- 侧边栏主题 -->
      <Divider size="small">侧边栏主题</Divider>
      <div class="i-layout-navbar-settings-item">
        <div
          class="i-layout-navbar-settings-item-radio"
          :class="{ on: sideTheme === 'dark' }"
          @click="handleChangeSetting('sideTheme', 'dark')"
          style="margin-right: 30px;"
        >
          <SvgIcon type="dark" :size="52" color="red" />
        </div>
        <div
          class="i-layout-navbar-settings-item-radio"
          :class="{ on: sideTheme === 'light' }"
          @click="handleChangeSetting('sideTheme', 'light')"
        >
          <SvgIcon type="light" :size="52" />
        </div>
      </div>

      <!-- 主题颜色 -->
      <!-- <Divider size="small">主题颜色</Divider>
      <div class="i-layout-navbar-settings-item"></div> -->

      <!-- 布局设置 -->
      <Divider size="small">布局设置</Divider>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">固定顶栏</span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.fixedHeader"
            @on-change="(val) => handleChangeSetting('fixedHeader', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">固定侧边栏</span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.fixedSidebar"
            @on-change="(val) => handleChangeSetting('fixedSidebar', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">显示侧边栏Logo</span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.sidebarLogo"
            @on-change="(val) => handleChangeSetting('sidebarLogo', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">
          侧边栏开启手风琴模式
          <Tooltip
            placement="top"
            content="开启后每次只能展开关闭一个菜单项"
            transfer
          >
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
        </span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.menuAccordion"
            @on-change="(val) => handleChangeSetting('menuAccordion', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">
          侧边栏折叠时显示父级菜单名
        </span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.menuCollapseParentTitle"
            @on-change="
              (val) => handleChangeSetting('menuCollapseParentTitle', val)
            "
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc"
          >开启水印</span
        >
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.isWater"
            @on-change="(val) => handleChangeSetting('isWater', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc"
          >开启Tabs View标签页</span
        >
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.tabsView"
            @on-change="(val) => handleChangeSetting('tabsView', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">
          开启Tabs View标签图标
          <Tooltip placement="top" content="需要开启Tabs View标签页" transfer>
            <Icon type="ios-help-circle-outline" />
          </Tooltip>
        </span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.tabsViewIcon"
            :disabled="!settingsStore.tabsView"
            @on-change="(val) => handleChangeSetting('tabsViewIcon', val)"
          />
        </span>
      </div>

      <!-- 其他设置 -->
      <Divider size="small">其他设置</Divider>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc">开启动态标题</span>
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.showDynamicTitle"
            @on-change="(val) => handleChangeSetting('showDynamicTitle', val)"
          />
        </span>
      </div>
      <div class="i-layout-navbar-settings-item">
        <span class="i-layout-navbar-settings-item-desc"
          >面包屑根目录显示首页</span
        >
        <span class="i-layout-navbar-settings-item-action">
          <Switch
            size="small"
            v-model="settingsStore.rootHome"
            @on-change="(val) => handleChangeSetting('rootHome', val)"
          />
        </span>
      </div>

      <Alert type="warning">
        <template #desc>
          <div>
            该功能主要实时预览各种布局设置效果，如需项目中默认起作用请在
            <strong>src/settings.js</strong>
            中配置。
          </div>
        </template>
      </Alert>
    </Drawer>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import useSettingsStore from "@/store/modules/settings";
//仓库实例化
const settingsStore = useSettingsStore();
//抽屉状态
const showSettings = ref(false);
//菜单主题
const sideTheme = computed(() => {
  return settingsStore.sideTheme;
});
// 改变设置
const handleChangeSetting = (key, value) => {
  settingsStore.changeLayoutSetting(key, value);
};
</script>
<style lang="less" scoped>
.i-layout-navbar-settings {
  display: inline-block;
  cursor: pointer;
  line-height: 60px;
  color: #515a6e;
  padding: 0px 10px;

  .i-icon {
    font-size: 20px;
  }

  // 设置的样式
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    // radio
    &-radio {
      display: inline-block;
      position: relative;
      cursor: pointer;
      &::after {
        background: transparent;
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        margin: 0 auto;
        margin-top: -4px;
      }
      &.on::after {
        background: #19be6b;
      }
    }
    &-desc {
      flex: 1 1;
      font-size: 14px;
    }
    &-action {
      flex: 0 0 auto;
    }
  }
}
</style>
