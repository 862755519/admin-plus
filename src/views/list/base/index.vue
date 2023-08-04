<!--
  功能：卡片列表
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月29日 10:10:02
-->
<template>
  <div>
    <PageTitle
      title="基础列表"
      subTitle="标准的列表，包含增删改查等基础操作。"
    ></PageTitle>
    <div class="dome-box">
       <IconSelect></IconSelect>
    </div>
  </div>
</template>
<script setup>
import IconSelect from "@/components/IconSelect/index.vue";
</script> 
<style scoped lang="less">
.dome-box {
  padding: 15px;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
}
</style>
    