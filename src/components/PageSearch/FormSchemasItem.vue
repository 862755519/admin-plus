<!--
功能：
作者：Maoxiangdong
邮箱：862755519@qq.com
时间：2024-03-19 13:22:53
-->
<template>
  <Col v-bind="colProps" v-if="visible">
    <FormItem v-bind="formItemProps" style="margin-bottom: 15px">
      <component
        :is="component"
        v-model="modelValue"
        v-bind="componentProps"
        style="width: 100%"
      >
        <!-- 选择器渲染选项 -->
        <Option
          v-if="component === 'Select'"
          v-for="(item, index) in selectOptions"
          :value="item[optionValue]"
          :key="index"
          >{{ item[optionLabel] }}</Option
        >
      </component>
    </FormItem>
  </Col>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  // 父级传入的搜索表单配置属性
  formSchemasItemProps: {
    type: Object,
    default: () => {},
  },
  formModel: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits(["update:formModel"]);
// 栅格配置
const colProps = computed(() => {
  return props.formSchemasItemProps?.colProps;
});
// 表单项配置
const formItemProps = computed(() => {
  return props.formSchemasItemProps?.formItemProps;
});
// 表单项组件
const component = computed(() => {
  return props.formSchemasItemProps?.component;
});
// 表单项组件配置
const componentProps = computed(() => {
  return props.formSchemasItemProps?.componentProps;
});
// 表单项值
const modelValue = computed({
  get() {
    return props.formModel[formItemProps.value.prop] || null;
  },
  set(val) {
    props.formModel[formItemProps.value.prop] = val;
    emits("update:formModel", props.formModel);
  },
});
// 是否显示
const visible = computed(() => {
  const value = props.formSchemasItemProps?.visible;
  if (value !== null && value !== undefined) {
    if (typeof value === "boolean") {
      return value;
    } else if (typeof value === "function") {
      return value(props.formModel, props.formSchemasItemProps);
    } else {
      return true;
    }
  } else {
    return true;
  }
});
// 选择器选项
const selectOptions = computed(() => {
  const options = props.formSchemasItemProps?.optionsProps?.data || [];
  if (props.formSchemasItemProps?.optionsProps?.dataType === "number") {
    const dataValue =
      props.formSchemasItemProps?.optionsProps?.dataValue || "value";
    options.forEach((element) => {
      element[dataValue] = Number(element[dataValue]);
    });
  }
  if (props.formSchemasItemProps?.optionsProps?.dataType === "string") {
    const dataValue =
      props.formSchemasItemProps?.optionsProps?.dataValue || "value";
    options.forEach((element) => {
      element[dataValue] = String(element[dataValue]);
    });
  }
  return options;
});
// 选择器选项label
const optionLabel = computed(() => {
  return props.formSchemasItemProps?.optionsProps?.dataLabel || "label";
});
// 选择器选项value
const optionValue = computed(() => {
  return props.formSchemasItemProps?.optionsProps?.dataValue || "value";
});
</script>
<style lang="less" scoped></style>
