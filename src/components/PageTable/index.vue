<!--
功能：
作者：Maoxiangdong
邮箱：862755519@qq.com
时间：2024-05-24 16:17:53
-->
<template>
  <div class="page-table-container">
    <!-- 页面标题 -->
    <div class="page-table-header">
      <div class="page-table-header-title">页面标题</div>
      <div class="page-table-header-subTitle">页面功能描述信息</div>
    </div>
    <!-- 页面搜索 -->
    <div class="page-table-search">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="50"
      >
        <Row :gutter="15" style="border: 1px solid red;">
          <Col :xs="24" :sm="12" :md="6" :lg="4">
            <FormItem label="Name" prop="name">
              <Input
                v-model="formValidate.name"
                placeholder="Enter your name"
              ></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="6" :lg="4">
            <FormItem label="Name" prop="name">
              <Input
                v-model="formValidate.name"
                placeholder="Enter your name"
              ></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const formValidate = ref({
  name: "",
  mail: "",
  city: "",
  gender: "",
  interest: [],
  date: "",
  time: "",
  desc: "",
});
const ruleValidate = ref({});
</script>
<style lang="less" scoped>
.page-table-container {
  margin-top: 2px;
  .page-table-header {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 10px;
    &-title {
      color: #17233d;
      font-size: 20px;
    }
    &-subTitle {
      color: #515a6e;
      font-size: 14px;
      margin-top: 4px;
    }
  }
  .page-table-search {
    border: 1px solid red;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 4px;
  }
}
</style>
