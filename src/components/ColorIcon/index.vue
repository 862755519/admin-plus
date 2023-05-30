<template>
  <div class="color-box" :style="boxStyles">
    <Icon :type="icon" class="color-box-icon" :color="color"/>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
const props = defineProps({
  icon: {
    type: String,
    default: "md-desktop",
  },
  size: {
    type: Number,
    default: 32,
  },
  color: {
    type: String,
    default: "#2d8cf0",
  }
});
// 图标容器样式
const boxStyles = computed(() => {
  return {
    "background": `${props.color}22`,
    "height": `${props.size}px`,
    "width": `${props.size}px`,
    "line-height": `${props.size}px`,
    "font-size": `${props.size*0.5}px`
  }
});
</script>
  
  <style lang="less" scoped>
.color-box {
  border-radius: 50%;
  display: inline-block;
  text-align: center;
}
</style>
  