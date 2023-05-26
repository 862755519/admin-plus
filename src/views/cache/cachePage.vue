<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月23日 16:34:43
-->
<template>
  <div>
    <div class="page-head"></div>
    <div class="page-container">
      <Form :model="formData" :label-width="80">
        <FormItem label="Input">
          <Input
            v-model="formData.input"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formData.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const formData = reactive({
  input:"",
  select:""
})
</script> 

<style scoped lang="less">
</style>
