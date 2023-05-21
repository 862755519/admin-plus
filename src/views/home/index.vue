<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年04月29日 11:37:05
-->
<template>
  <div>
    我是home页面
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="text" @click="onDemo">发送请求</Button>
  </div>
</template>

<script setup>
import {login} from "@/api/modules/login"
const onDemo = (() => {
  login().then((res) => {
    console.log(res);
  })
})
</script> 

<style scoped>
</style>
