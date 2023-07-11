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
  box-shadow: 0 0 5px 0 rgba(210,215,225,.36);
  border-radius: 4px;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 15px;
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
