<!--
  功能：用户信息
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 15:53:56
-->
<template>
  <div id="i-layout-navbar-user" class="i-layout-navbar-user">
    <Dropdown class="avatar-dropdown" transfer-class-name="overlay-menu">
      <Avatar class="avatar-image" size="small" :src="avatar" />
      <span class="avatar-title">{{ name }}</span>

      <template #list>
        <DropdownMenu>
          <router-link to="/">
            <DropdownItem> 首页 </DropdownItem>
          </router-link>
          <router-link to="/user">
            <DropdownItem>个人中心</DropdownItem>
          </router-link>
          <DropdownItem divided @click="handleLogout">退出登录</DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { Message, Modal } from "view-ui-plus";
import useUserStore from "@/store/modules/user";
import { useRoute, useRouter } from "vue-router";
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
// 用户名
const name = computed(() => {
  if (userStore.userInfo) {
    return userStore.userInfo.name;
  } else {
    return "User";
  }
});
// 头像
const avatar = computed(() => {
  if (userStore.userInfo) {
    return userStore.userInfo.avatar;
  } else {
    return "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar";
  }
});
//退出全屏
const handleLogout = () => {
  Modal.confirm({
    title: "退出登录",
    content: "<p>是否确认退出登录，清除登录信息？</p>",
    onOk: () => {
      userStore.logout().then((res) => {
        if (res.code == 200) {
          router.push(`/login?redirect=${route.fullPath}`);
          Message.success("退出登录成功");
        }
      });
    },
    onCancel: () => {},
  });
};
</script>
<style lang="less" scoped>
// 登录用户信息
.i-layout-navbar-user {
  display: inline-block;
  padding: 0px 10px;
  .avatar-dropdown {
    cursor: pointer;
    .avatar-image {
      border-radius: 50%;
      vertical-align: middle;
    }
    .avatar-title {
      font-size: 14px;
      position: relative;
      margin-left: 10px;
    }
  }
}
</style>
