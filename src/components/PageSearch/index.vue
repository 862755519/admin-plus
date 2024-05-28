<!--
  功能：表单页面搜索
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月21日 14:43:58
-->
<template>
  <div class="page-search-container">
    <Form ref="formRef" :model="formModel" v-bind="formProps">
      <Row :gutter="15">
        <FormSchemasItem
          v-for="(item, index) in formSchemasProps"
          :key="index"
          :formModel="formModel"
          :formSchemasItemProps="item"
        ></FormSchemasItem>
        <Col span="4">
          <FormItem :label-width="0" style="margin-bottom: 15px">
            <Button type="primary" @click="handleSearch">查询</Button>
            <Button style="margin-left: 8px" @click="handleReset">重置</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { defaultConfig } from "./defaultConfig.js";
import FormSchemasItem from "./FormSchemasItem.vue";
import { Message } from "view-ui-plus";
const props = defineProps({
  // 父级传入的搜索表单配置属性
  pageSearchOptions: {
    type: Object,
    default: () => {},
  },
});
// 表单对象
// 表单对象
const formRef = ref(null);
// 表单数据对象
const formModel = ref({});
// 表单配置
const formProps = ref({});
// 表单域组件配置
const formSchemasProps = ref([]);
// 派生数据
const emits = defineEmits(["onSearch", "onReset"]);
// 判断一个元素是否为空
const isExist = (value) => {
  return typeof value !== "undefined" && value !== null;
};
// 初始化表单配置
const initPageSearchOptions = () => {
  formModel.value =
    props.pageSearchOptions?.formProps?.model ||
    defaultConfig?.formProps?.model ||
    {};
  formProps.value =
    props.pageSearchOptions?.formProps || defaultConfig?.formProps || {};
  formSchemasProps.value =
    props.pageSearchOptions?.formSchemasProps ||
    defaultConfig?.formSchemasProps ||
    [];
};
// 处理异步数据
const handleAsyncData = () => {
  if (isExist(formSchemasProps.value)) {
    formSchemasProps.value.forEach(async (item) => {
      if (
        isExist(item.optionsProps?.data) &&
        typeof item.optionsProps?.data === "function"
      ) {
        item.optionsProps.data = await item.optionsProps.data();
      }
    });
  }
};
// 查询
const handleSearch = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emits("onSearch", formModel.value);
    } else {
      Message.error("表单验证失败");
    }
  });
};
// 重置
const handleReset = () => {
  formRef.value.resetFields();
  emits("onReset", formModel.value);
};
// onMounted
onMounted(() => {
  initPageSearchOptions();
  handleAsyncData();
});
// 暴露方法
defineExpose({
  formRef,
  formModel,
  formProps,
  formSchemasProps,
});
</script>

<style scoped lang="less">
.page-search-container {
  background-color: #ffffff;
  padding: 15px 15px 1px 15px;
  border-radius: 4px;
}
</style>
