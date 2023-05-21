<template>
  <svg class="svg-icon" :style="iconStyles" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: "",
  },
});
// 图标名称，必须格式是 #svg-icon-[name] ，要和vue.config.js中的配置保持一致
const iconName = computed(() => {
  return `#svg-icon-${props.type}`;
});
// 图标样式
const iconStyles = computed(() => {
  return {
    "font-size": props.size,
  };
});
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.16em;
  /* fill: currentColor; */
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
