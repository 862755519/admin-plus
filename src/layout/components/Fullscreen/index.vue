<!--
  功能：页面全屏
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月11日 08:54:03
-->
<template>
  <div
    id="i-layout-navbar-fullscreen"
    class="i-layout-navbar-fullscreen"
    @click="toggleClick"
  >
    <Icon class="i-icon" type="md-contract" v-show="isFullscreen" />
    <Icon class="i-icon" type="md-expand" v-show="!isFullscreen" />
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import screenfull from "screenfull";
import { Message } from "view-ui-plus";
//是否全屏
const isFullscreen = ref(false);
// 改变
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
};
// 初始化
const init = () => {
  if (screenfull.isEnabled) {
    screenfull.on("change", change);
  }
};
// 切换全屏
const toggleClick = () => {
  if (!screenfull.isEnabled) {
    Message.error("你的浏览器不支持全屏");
    return false;
  }
  screenfull.toggle();
};
//销毁
const destroy = () => {
  if (screenfull.isEnabled) {
    screenfull.off("change", change);
  }
};
// onMounted
onMounted(() => {
  init();
});
// onBeforeUnmount
onBeforeUnmount(() => {
  destroy();
});
</script>
<style lang="less" scoped>
.i-layout-navbar-fullscreen {
  display: inline-block;
  cursor: pointer;
  line-height: 64px;
  color: #515a6e;
  padding: 0px 10px;

  .i-icon {
    font-size: 20px;
  }
}
</style>
