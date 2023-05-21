<!--
  功能：菜单标题
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月15日 16:09:09
-->
<template>
  <Icon :type="icon" class="ivu-icon sub-ivu-icon" />
  <span
    :class="[
      'i-layout-menu-side-submenu-title',
      subtitle ? 'i-layout-menu-side-submenu-title-with-subtitle' : '',
    ]"
  >
    {{ title }}
    <span
      :class="[
        'i-layout-menu-side-submenu-subtitle',
        icon ? 'i-layout-menu-side-submenu-subtitle-with-icon' : '',
      ]"
      style="margin-left: 1px"
    >
      {{ subtitle }}
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script> 

<style scoped lang="less">
.sub-ivu-icon {
  color: currentColor;
  font-size: 16px;
}
</style>
