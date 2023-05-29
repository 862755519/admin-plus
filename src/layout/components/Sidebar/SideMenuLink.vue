<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月16日 11:13:31
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { isExternal } from "@/utils/validate";
const props = defineProps({
  to: {
    type: String,
    required: true,
    default: "",
  },
});
//是否外部连接
const isExternalLink = computed(() => {
  return isExternal(props.to);
});
//跳转类型
const type = computed(() => {
  if (isExternalLink.value) {
    return "a";
  }
  return "router-link";
});
const linkProps = (to) => {
  if (isExternalLink.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }
  return {
    to: to,
  };
};
</script>
