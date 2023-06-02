<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月09日 16:42:49
-->
<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-title">欢迎登录</div>
      <div class="login-text">企业级中台管理系统</div>
      <Alert
        type="error"
        v-if="alertState"
        show-icon
        style="margin-top: 20px; text-align: left"
      >
        登录失败！
        <template #desc> 账号或密码错误，请重新登录！ </template>
      </Alert>
      <Form
        ref="loginRef"
        :model="loginForm"
        :rules="loginRules"
        class="form-container"
      >
        <FormItem prop="username">
          <Input
            prefix="ios-contact"
            size="large"
            clearable
            v-model="loginForm.username"
            placeholder="请输入账号"
          />
        </FormItem>
        <FormItem prop="password">
          <Input
            prefix="ios-lock"
            type="password"
            password
            size="large"
            v-model="loginForm.password"
            placeholder="请输入账号"
          />
        </FormItem>
        <FormItem>
          <div class="form-row">
            <Checkbox v-model="isRemberLogin">记住密码</Checkbox>
            <div>没有账号？</div>
          </div>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            :loading="loginLoading"
            @click="handleLogin"
            long
            size="large"
            >{{ loginLoading ? "登录中.." : "登录" }}</Button
          >
        </FormItem>
        <FormItem>
          <Divider>其他登录方式</Divider>
          <div class="logi-type">
            <div class="type-item">
              <SvgIcon type="qq" :size="35" />
              <div>微信</div>
            </div>
            <div class="type-item">
              <SvgIcon type="wechat" :size="35" />
              <div>微信</div>
            </div>
            <div class="type-item">
              <SvgIcon type="weibo" :size="35" />
              <div>微信</div>
            </div>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { Message } from "view-ui-plus";
import useUserStore from "@/store/modules/user";
const router = useRouter();
const userStore = useUserStore();
//登录表单
const loginForm = reactive({
  username: "admin",
  password: "123456",
});
const loginRef = ref(null);
// 登录失败提示
const alertState = ref(false);
//表单验证
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      },
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      },
    },
  ],
});
//记住密码
const isRemberLogin = ref(false);
//登录状态
const loginLoading = ref(false);
//跳转登录来源
const redirect = ref(null);
//回车登录
const onKeyDown = (e) => {
  if (e.keyCode == 13) {
    handleLogin();
  }
};
//处理登录
const handleLogin = () => {
  loginRef.value.validate((valid) => {
    if (valid) {
      loginLoading.value = true;
      // 调用action的登录方法
      userStore
        .login(loginForm)
        .then((res) => {
          const {code,message} = res;
          if (code == 200) {
            Message.success("登录成功正在跳转");
            setTimeout(() => {
              loginLoading.value = false;
              alertState.value = false;
              router.push({ path: redirect.value || "/" });
            }, 300);
          } else {
            Message.error( message || "登录失败");
            alertState.value = true;
          }
        })
        .catch(() => {});
    } else {
      loginLoading.value = false;
      return false;
    }
  });
};
//监听路由变化
watch(
  () => router.currentRoute.value,
  (route) => {
    redirect.value = route.query && route.query.redirect;
  },
  { immediate: true, deep: true }
);
//onMounted
onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});
//onBeforeUnmount
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown, false);
});
</script>
  
  <style lang="less" scoped>
.login-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/login_bg.png");
  background-size: 100% 100%;

  .login-card {
    width: 500px;
    padding: 50px 30px;
    background-color: #fff;
    box-shadow: 0 0px 10px 0px rgba(30, 30, 30, 0.1);
    border-radius: 10px;
    position: absolute; // 绝对定位
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    text-align: center;
    .login-title {
      font-size: 28px;
      color: #17233d;
    }

    .login-text {
      font-size: 18px;
      color: #515a6e;
      margin-top: 8px;
    }

    .form-container {
      margin-top: 30px;
      .form-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .logi-type {
      display: flex;
      justify-content: space-between;
      .type-item {
        width: 33%;
        text-align: center;
        font-size: 14px;
        color: #515a6e;
      }
    }
  }
}

// 是手机设备
@media screen and (max-width: 680px) {
  .login-container {
    background-size: cover;
  }
  .login-card {
    width: 100vw !important;
    height: 100vh !important;
    padding-top: 100px !important;
    box-shadow: none !important;
  }
}
</style>
  
