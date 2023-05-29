<!--
  功能：页头
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月29日 10:05:06
-->
<template>
<div class="page-title-box">
  <div class="page-title-box-title">{{ title }}</div>
  <div class="page-title-box-subTitle">{{ subTitle }}</div>
</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  }
});
</script> 

<style scoped lang="less">
.page-title-box{
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 2px 0 4px rgba(0, 21, 41, 0.06);
  &-title{
    color: #17233d;
    font-size: 20px;
  }
  &-subTitle{
    color: #515a6e;
    font-size: 15px;
    margin-top: 6px;
  }
}
</style>
