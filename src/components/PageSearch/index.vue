<!--
  功能：表单页面搜索
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月21日 14:43:58
-->
<template>
    <div class="page-search-box">
        <Form :model="formData" :label-position="searchOptions.labelPosition" :label-width="searchOptions.labelWidth"
            class="page-search-form">
            <Row :gutter="15">
                <Col :xs="24" :sm="12" :md="6" :lg="4" v-for="(item, index) in searchOptions.formItem" :key="index">
                <!-- 输入框 -->
                <FormItem v-if="item.type == 'input'" :label="item.title" :props="item.field" class="form-item">
                    <Input v-model="formData[item.field]" :placeholder="item.placeholder" clearable />
                </FormItem>
                <!-- 数字输入框 -->
                <FormItem v-if="item.type == 'inputNumber'" :label="item.title" :props="item.field" class="form-item">
                    <InputNumber v-model="formData[item.field]" :placeholder="item.placeholder" style="width: 100%;">
                    </InputNumber>
                </FormItem>
                <!-- 选择器 -->
                <FormItem v-if="item.type == 'select'" :label="item.title" :props="item.field" class="form-item">
                    <Select v-model="formData[item.field]" :placeholder="item.placeholder" filterable style="width: 100%;">
                        <Option v-for="(element, sub) in item.data" :value="element[item.dataValue]" :key="sub">{{
                            element[item.dataLabel] }}</Option>
                    </Select>
                </FormItem>
                <!-- 日期选择 -->
                <FormItem v-if="item.type == 'date'" :label="item.title" :props="item.field" class="form-item">
                    <DatePicker type="date" v-model="formData[item.field]" :placeholder="item.placeholder"
                        style="width: 100%" />
                </FormItem>
                <!-- 日期段选择 -->
                <FormItem v-if="item.type == 'daterange'" :label="item.title" :props="item.field" class="form-item">
                    <DatePicker type="daterange" v-model="formData[item.field]" :placeholder="item.placeholder"
                        style="width: 100%" />
                </FormItem>
                <!-- 日期时间段 -->
                <FormItem v-if="item.type == 'datetime'" :label="item.title" :props="item.field" class="form-item">
                    <DatePicker type="datetime" v-model="formData[item.field]" :placeholder="item.placeholder"
                        style="width: 100%" />
                </FormItem>
                <!-- 日期时间段选择 -->
                <FormItem v-if="item.type == 'datetimerange'" :label="item.title" :props="item.field" class="form-item">
                    <DatePicker type="datetimerange" v-model="formData[item.field]" :placeholder="item.placeholder"
                        style="width: 100%" />
                </FormItem>
                </Col>
                <Col :xs="24" :sm="12" :md="6" :lg="4">
                <FormItem class="form-item" :label-width="0" label="">
                    <Button type="primary" @click="handleSearch">查询</Button>
                    <Button style="margin-left: 8px" @click="handleReset">重置</Button>
                </FormItem>
                </Col>
            </Row>

        </Form>
    </div>
</template>

<script setup>
import { reactive, watch } from "vue";
const props = defineProps({
    pageSearchOptions: {
        type: Object,
        default: () => {}
    }
})
const emits = defineEmits(["onSearch", "onReset"])
// 表单数据对象
const formData = reactive({})
// 表单搜索配置项
const searchOptions = reactive({
    labelPosition: "left", // 表单域标签的位置，可选值为 left、right、top
    labelWidth: 70, // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
    labelColon: false, // 是否自动在 label 名称后添加冒号
    disabled: false, // 是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）
    formItem: [
        // 输入框
        // {
        //     field: "input", // 数据字段
        //     title: "查询内容", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "input", // 组件类型 
        //     placeholder: "请输入内容", // 占位文本
        // },
        // 数字输入框
        // {
        //     field: "inputNumber", // 数据字段
        //     title: "查询数字", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "inputNumber", // 组件类型 
        //     placeholder: "请输入内容", // 占位文本
        // },
        // 选择器
        // {
        //     field: "select", // 数据字段
        //     title: "查询选择", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "select", // 组件类型 
        //     placeholder: "请选择内容", // 占位文本
        //     dataValue: "value", // 数据value字段 默认 value
        //     dataLabel: "label", // 数据label字段 默认 label
        //     data: [
        //         {
        //             value: 'New York',
        //             label: '纽约'
        //         },
        //         {
        //             value: 'London',
        //             label: '伦敦'
        //         },
        //     ]
        // },
        // 日期选择
        // {
        //     field: "date", // 数据字段
        //     title: "查询日期", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "date", // 组件类型 
        //     placeholder: "请输选择日期", // 占位文本
        // },
        // 日期段选择
        // {
        //     field: "daterange", // 数据字段
        //     title: "查询日期", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "daterange", // 组件类型 
        //     placeholder: "请输选择日期段", // 占位文本
        // },
        // 日期时间选择
        // {
        //     field: "datetime", // 数据字段
        //     title: "日期时间", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "datetime", // 组件类型 
        //     placeholder: "请输选择日期时间", // 占位文本
        // },
        // 日期时间段选择
        // {
        //     field: "datetimerange", // 数据字段
        //     title: "日期时间", // 数据字段名称
        //     defaultValue: null, // 默认值
        //     type: "datetimerange", // 组件类型 
        //     placeholder: "请输选择日期时间段", // 占位文本
        // },
    ], // 表单数据对
})
// 生成表单数据对象
const setFormData = () => {
    if (searchOptions.formItem && searchOptions.formItem.length > 0) {
        searchOptions.formItem.forEach(element => {
            formData[element.field] = element.defaultValue || null;
        });
    }
}
// 处理查询
const handleSearch = () => {
    emits("onSearch", formData)
}
// 处理重置
const handleReset = () => {
    setFormData();
    emits("onReset", formData)
}
// 监听数据变化
watch(
    () => props.pageSearchOptions,
    (val) => {
        if (val) {
            for (let key in val) {
                if (val[key] !== null && val[key] !== undefined) {
                    searchOptions[key] = val[key];
                }
            }
            setFormData();
        }
    },
    { deep: true, immediate: true }
);
</script> 

<style scoped lang="less">
.page-search-box {
    padding: 15px 15px 5px 15px;
    background-color: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
}

.page-search-form {
    .form-item {
        margin-bottom: 10px;
        box-sizing: border-box;
    }
}
</style>
