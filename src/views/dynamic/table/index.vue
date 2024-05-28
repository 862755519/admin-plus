<!--
功能：动态表格页面
作者：Maoxiangdong
邮箱：862755519@qq.com
时间：2024-05-24 14:39:36
-->
<template>
  <div>
    <!-- 页面标题 -->
    <PageTitle
      title="员工列表"
      subTitle="企业员工信息列表管理。新增、查询、删除"
    ></PageTitle>
    <!-- 页面搜索 -->
    <PageSearch
      ref="pageSearchRef"
      :pageSearchOptions="pageSearchOptions"
      @onSearch="searchEvent"
      @onReset="resetEvent"
      style="margin-top: 10px"
    ></PageSearch>
    <!-- 页面表格 -->
    <PageTable
      ref="pageTableRef"
      style="margin-top: 10px;"
    ></PageTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 用于模拟异步接口请求
const getRemoteData = (data = "获取数据", time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};
const pageSearchOptions = {
  formProps: {
    labelWidth: 70, // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
    model: {
      name: "",
      dep: null,
      post: null,
      entryDate: null,
    }, // 表单数据对象
    rules: {},
  },
  formSchemasProps: [
    // 文本输入框
    {
      component: "Input", // 组件名 输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "name", // 对应表单域 model 里的字段
        label: "员工姓名", // 标签文本
      },
      componentProps: {
        type: "text", // 输入框类型，可选值为 text、password、textarea、url、email、date、number、tel
        placeholder: "请输入内容", // 占位文本
        clearable: true, // 是否显示清空按钮
      },
    },
    // 异步数据源选择器
    {
      component: "Select", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "dep", // 对应表单域 model 里的字段
        label: "所在部门", // 标签文本
      },
      componentProps: {
        placeholder: "请选择内容", // 占位文本
        filterable: true, // 支持搜索
      },
      optionsProps: {
        data: async () => {
          const depData = [
            { id: 1, label: "总经办" },
            { id: 2, label: "技术部" },
            { id: 3, label: "销售部" },
            { id: 4, label: "财务部" },
            { id: 4, label: "企划部" },
          ];
          return await getRemoteData(depData);
        },
        dataValue: "id", // 数据源的 value 字段 默认为 value
        dataLabel: "label", // 数据源的 label 字段 默认为 label
      },
    },
    // 选择器
    {
      component: "Select", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "post", // 对应表单域 model 里的字段
        label: "员工职务", // 标签文本
      },
      componentProps: {
        placeholder: "请选择内容", // 占位文本
        filterable: true, // 支持搜索
      },
      optionsProps: {
        data: [
          {
            value: 1, // 值
            label: "技术总监", // 标签
          },
          {
            value: 2, // 值
            label: "财务总监", // 标签
          },
          {
            value: 3, // 值
            label: "前端开发工程师", // 标签
          },
          {
            value: 4, // 值
            label: "后端开发工程师", // 标签
          },
        ],
      },
    },
    // 日期选择器
    {
      component: "DatePicker", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "entryDate", // 对应表单域 model 里的字段
        label: "入职日期", // 标签文本
      },
      componentProps: {
        type: "date",
        placeholder: "请选择日期", // 占位文本
      },
    },
  ],
};
const pageSearchRef = ref();
const searchEvent = (event) => {
  console.log("搜索");
  console.log(event);
  console.log(pageSearchRef.value);
};
const resetEvent = (event) => {
  console.log("重置");
  console.log(event);
  console.log(pageSearchRef.value);
};
</script>
<style lang="less" scoped></style>
