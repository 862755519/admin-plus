<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月23日 16:34:43
-->
<template>
  <div>
    <PageTitle
      title="缓存页面"
      subTitle="此页面已开启页面缓存，在下面表单中输入内容然后跳转其他页面返回查看效果。"
    ></PageTitle>
    <div class="form-box">
      <Form :model="formData" :label-width="80">
        <FormItem label="输入框">
          <Input
            v-model="formData.input"
            style="width: 300px"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="下拉选择">
          <Select v-model="formData.select" style="width: 300px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="日期选择">
          <DatePicker
            type="date"
            placeholder="Select date"
            style="width: 300px"
            v-model="formData.date"
          ></DatePicker>
        </FormItem>
        <FormItem label="单选">
          <RadioGroup v-model="formData.radio">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="多选">
          <CheckboxGroup v-model="formData.checkbox">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="开关">
          <i-switch v-model="formData.switch" size="large">
            <template #open>
              <span>开</span>
            </template>
            <template #close>
              <span>关</span>
            </template>
          </i-switch>
        </FormItem>
        <FormItem label="文本域">
          <Input
            v-model="formData.textarea"
            type="textarea"
            style="width: 600px"
            :autosize="{ minRows: 4, maxRows: 6 }"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">提交</Button>
          <Button style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const formData = reactive({
  input: "",
  select: "",
  radio: "male",
  checkbox: [],
  switch: true,
  date: "",
  textarea: "",
});
</script> 

<style scoped lang="less">
.form-box {
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
}
</style>
