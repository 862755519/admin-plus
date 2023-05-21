<!--
  功能：消息
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 15:53:56
-->
<template>
  <div id="i-layout-navbar-notify" class="i-layout-navbar-notify">
    <Badge :count="6" :offset="[16, 0]">
      <Icon class="i-icon" type="md-notifications-outline" />
    </Badge>
  </div>
</template>
<script setup>
</script>

<style lang="less" scoped>
.i-layout-navbar-notify {
  display: inline-block;
  cursor: pointer;
  line-height: 64px;
  color: #515a6e;
  padding: 0px 10px;

  .i-icon {
    font-size: 20px;
  }
}
</style>
