<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月28日 10:27:55
-->
<template>
  <div class="i-layout-footer">
    <div class="i-layout-footer-link">
      <a href="">文档</a>
      <Divider type="vertical" />
      <a href="#">官网</a>
      <Divider type="vertical" />
      <a href="#">GitHub</a>
    </div>
    <div class="i-layout-footer-copy">
      Copyright © {{ new Date().getFullYear() }}  Admin Plus 开源社区
    </div>
  </div>
</template>

<script setup>
</script> 

<style scoped lang="less">
.i-layout-footer {
  text-align: center;
  padding: 20px;
  &-link {
    color: #515a6e;
    font-size: 14px;
    :hover {
      color: #17233d;
    }
  }
  &-copy {
    font-size: 13px;
    color: #808695;
    margin-top: 10px;
  }
}
</style>
