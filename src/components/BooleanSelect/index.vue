<!--
  功能：支持布尔值选择器
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月17日 09:45:16
-->
<template>
    <div>
      <Select
        :model-value="selectValue"
        :disabled="props.disabled"
        :clearable="props.clearable"
        :readonly="props.readonly"
        :filterable="props.filterable"
        :placeholder="props.placeholder"
        :transfer="props.transfer"
        @on-change="selectValueChange"
      >
        <!-- 自定义选项插槽 -->
        <slot></slot>
      </Select>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  const props = defineProps({
    // 绑定的值
    modelValue: {
      type: Boolean || String || Number,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 是否支持搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 占位文字
    placeholder: {
      type: String,
      default: "请选择",
    },
    // 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
    transfer: {
      type: Boolean,
      default: false,
    },
  });
  // 选择的数据
  const selectValue = ref(props.modelValue);
  // emit 事件
  const emits = defineEmits(["update:modelValue"]);
  // 选择
  const selectValueChange = (event) => {
    if (event == "false" || event == "true") {
      emits("update:modelValue", JSON.parse(event));
    } else {
      emits("update:modelValue", event);
    }
  };
  // 监听状态改变
  watch(
    () => props.modelValue,
    (val) => {
      if (typeof val == "boolean") {
        selectValue.value = String(val);
      } else {
        selectValue.value = val;
      }
    },
    { immediate: true }
  );
  </script> 
  
  <style scoped lang="less">
  </style>
  