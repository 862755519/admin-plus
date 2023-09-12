<!--
  功能：表格列表
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月29日 10:10:02
-->
<template>
  <div>
    <!-- 页面标题 -->
    <PageTitle title="表格列表" subTitle="vxe-table集成的配置性表格数据，增删改查等其他操作。"></PageTitle>
    <!-- 页面搜索 -->
    <PageSearch :pageSearchOptions="pageSearchOptions" @onSearch="searchCallback" @onReset="resetCallback"></PageSearch>
    <!-- 表格页面 -->
    <PageTable :pageTableOptions="pageTableOptions" @onRefresh="refreshCallback" @onAddData="addDataCallback"
      @onEditData="editDataCallback" @onDeleteData="deleteDataCallback" @onSelectEvent="selectEventCallback"
      @onPageChange="pageChangeCallback" @onPageSizeChange="pageSizeChangeCallback"></PageTable>
  </div>
</template>
    
<script setup>
import { reactive, ref } from "vue";
import { Message } from "view-ui-plus";
// 表格搜索配置项
const pageSearchOptions = reactive({
  labelWidth: 70, // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
  labelColon: false, // 是否自动在 label 名称后添加冒号
  disabled: false, // 是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）
  formItem: [
    // 姓名
    {
      field: "name", // 数据字段
      title: "员工姓名", // 数据字段名称
      defaultValue: null, // 默认值
      type: "input", // 组件类型 
      placeholder: "请输入员工姓名", // 占位文本
    },
    {
      field: "mobile", // 数据字段
      title: "员工手机", // 数据字段名称
      defaultValue: null, // 默认值
      type: "input", // 组件类型 
      placeholder: "请输入员工手机", // 占位文本
    },
    // 数字输入框
    {
      field: "年龄", // 数据字段
      title: "员工年龄", // 数据字段名称
      defaultValue: null, // 默认值
      type: "inputNumber", // 组件类型 
      placeholder: "请输入员工年龄", // 占位文本
    },
    // 选择器
    {
      field: "sxe", // 数据字段
      title: "员工性别", // 数据字段名称
      defaultValue: null, // 默认值
      type: "select", // 组件类型 
      placeholder: "请选择员工性别", // 占位文本
      dataValue: "value", // 数据value字段 默认 value
      dataLabel: "label", // 数据label字段 默认 label
      data: [
        {
          value: '0',
          label: '女'
        },
        {
          value: '1',
          label: '男'
        },
      ]
    },
    // 日期选择
    {
      field: "birthday", // 数据字段
      title: "出生日期", // 数据字段名称
      defaultValue: null, // 默认值
      type: "date", // 组件类型 
      placeholder: "请输选择出生日期", // 占位文本
    }
  ], // 表单数据对
})
// 表格页面配置项
const pageTableOptions = reactive({
  id: "",
  filename: "员工名称", // 导出文件名
  sheetName: "员工列表", // 表名
  columns: [
    { type: 'checkbox', width: 50, align: 'center' },
    { type: 'seq', width: 50, align: 'center' },
    { field: 'name', title: '员工姓名' },
    { field: 'mobile', title: '员工手机' },
    { field: 'age', title: '员工年龄' },
    { field: 'sex', title: '员工性别' },
    { field: 'birthday', title: '出生日期' },
    { field: 'address', title: '地址' }
  ], // 列配置信息
  total: 0, // 数据总数 每页条数切换的配置
  page: 1, // 当前页
  pageSize: 10, // 每页条数
  data: [
    { id: 10001, name: 'Test1', mobile: '19908853414', birthday: '1996-02-23', sex: '1', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', mobile: '15208746021', birthday: '2002-05-10', sex: '0', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', mobile: '13685615255', birthday: '1991-10-20', sex: '1', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', mobile: '13951545252', birthday: '2001-02-23', sex: '0', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', mobile: '18945125412', birthday: '2001-02-23', sex: '0', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', mobile: '16451524552', birthday: '2001-02-23', sex: '0', age: 27, address: 'Shanghai' },
    { id: 10007, name: 'Test7', mobile: '15632146521', birthday: '2001-02-23', sex: '1', age: 29, address: 'Shenzhen' },
    { id: 10008, name: 'Test8', mobile: '16545251543', birthday: '2001-02-23', sex: '0', age: 32, address: 'Shanghai' },
    { id: 10009, name: 'Test9', mobile: '13560215422', birthday: '2001-02-23', sex: '1', age: 30, address: 'Shenzhen' },
    { id: 10010, name: 'Test10', mobile: '13781554521', birthday: '2001-02-23', sex: '0', age: 34, address: 'Shanghai' }
  ], // 表格数据
})
// 搜索回调
const searchCallback = (event) => {
  console.log(event);
  Message.success('搜索回调')
}
// 重置回调
const resetCallback = () => {
  Message.success('重置回调')
}
// 刷新回调
const refreshCallback = () => {
  Message.success('刷新回调')
}
// 添加数据回调
const addDataCallback = () => {
  Message.success('添加数据回调')
}
// 编辑数据回调
const editDataCallback = () => {
  Message.success('编辑数据回调')
}
// 删除数据回调
const deleteDataCallback = () => {
  Message.success('删除数据回调')
}
// 选择数据回调
const selectEventCallback = () => {
  Message.success('选择数据回调')
}
// 页码改变回调
const pageChangeCallback = (event) => {
  console.log(event);
  Message.success('页码改变回调')
}
// 每页条数改变回调
const pageSizeChangeCallback = (event) => {
  console.log(event);
  Message.success('每页条数改变回调')
}
</script> 
    
<style scoped lang="less"></style>
    