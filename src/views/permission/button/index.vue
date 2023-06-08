<!--
  功能：按钮权限管理
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月07日 17:11:25
-->
<template>
  <div>
    <PageTitle
      title="按钮权限"
      subTitle="根据不同角色返回不同的按钮标识，前端使用自定义指令渲染"
    ></PageTitle>
    <div class="page-content">
      <Alert show-icon>
        不用用户角色拥有不同的按钮权限，请切换账号查看
        <template #desc
          >Admin角色，账号：admin，密码：123456，Test角色，账号：test，密码123456</template
        >
      </Alert>
      <div style="margin-top: 15px;">用户拥有的按钮权限数据 {{buttonPermission}}</div>
      <div style="margin-top: 15px;">
        <Button type="primary" v-permission="['user:query']" style="margin-right: 8px;">查询用户</Button>
        <Button type="success" v-permission="['user:add']" style="margin-right: 8px;">新增用户</Button>
        <Button type="warning" v-permission="['user:update']" style="margin-right: 8px;">编辑用户</Button>
        <Button type="error" v-permission="['user:delete']" style="margin-right: 8px;">删除用户</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
const buttonPermission = ref(userStore.permissions);
</script> 

<style scoped lang="less">
.page-content {
  padding: 15px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
