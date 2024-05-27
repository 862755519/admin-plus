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
        <Col
          v-for="(item, index) in formSchemasProps"
          :key="index"
          v-bind="item.colProps"
        >
          <FormItem v-bind="item.formItemProps">
            <component
              :is="item.component"
              v-model="formModel[item.formItemProps.prop]"
              v-bind="item.componentProps"
              style="width: 100%"
            >
              <!-- 选择器渲染选项 -->
              <!-- <Option
                v-for="item in selectOptions"
                :value="item[optionValue]"
                :key="item[optionValue]"
                >{{ item[optionLabel] }}</Option
              > -->
            </component>
          </FormItem>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
      </Row>

      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { defaultConfig } from "./defaultConfig.js";
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
// onMounted
onMounted(() => {
  initPageSearchOptions();
  console.log(defaultConfig);
  console.log(formModel.value);
  console.log(formProps.value);
  console.log(formSchemasProps.value);
});
</script>

<style scoped lang="less">
.page-search-container {
  border: 1px solid red;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 4px;
}
</style>
