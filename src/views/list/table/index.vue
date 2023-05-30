<!--
  功能：表格列表
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月29日 10:10:02
-->
<template>
  <div>
    我是表格列表
    <vxe-table :data="tableData" border>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";
const tableData = ref([
  {
    id: 10001,
    name: "Test1",
    role: "Develop",
    sex: "Man",
    age: 28,
    address: "test abc",
  },
  {
    id: 10002,
    name: "Test2",
    role: "Test",
    sex: "Women",
    age: 22,
    address: "Guangzhou",
  },
  {
    id: 10003,
    name: "Test3",
    role: "PM",
    sex: "Man",
    age: 32,
    address: "Shanghai",
  },
  {
    id: 10004,
    name: "Test4",
    role: "Designer",
    sex: "Women",
    age: 24,
    address: "Shanghai",
  },
]);
</script> 
    
    <style scoped lang="less">
</style>
    