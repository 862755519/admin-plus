<!--
  功能：配置表单
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月19日 15:45:02
-->
<template>
  <div>
    6666
    <!-- <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
    >
      <FormItem label="Name" prop="name">
        <Input
          v-model="formValidate.name"
          placeholder="Enter your name"
        ></Input>
      </FormItem>
      <FormItem label="E-mail" prop="mail">
        <Input
          v-model="formValidate.mail"
          placeholder="Enter your e-mail"
        ></Input>
      </FormItem>
      <FormItem label="City" prop="city">
        <Select v-model="formValidate.city" placeholder="Select your city">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="Date">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker
                type="date"
                placeholder="Select date"
                v-model="formValidate.date"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <TimePicker
                type="time"
                placeholder="Select time"
                v-model="formValidate.time"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Hobby" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Desc" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')"
          >Submit</Button
        >
        <Button @click="handleReset('formValidate')" style="margin-left: 8px"
          >Reset</Button
        >
      </FormItem>
    </Form> -->
  </div>
</template>

<script setup>
import { reactive, ref, watch  } from "vue";
const props = defineProps({
  pageFormConfig: {
    type: Object,
    required: true,
    default: () => {}
  }
});
// 表单配置项
const pageFormConfig = reactive({
  //表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
  labelWidth: 80,
  //表单域标签的位置，可选值为 left、right、top
  labelPosition: "left",
  //表单项左右间隔
  gutter: 15,
  //表单数据对象
  model: {},
  //表单验证规则，具体配置查看 async-validator
  rules: {},
  //表单项配置
  formItem: [
    {
      //对应表单域 model 里的字段
      prop: "",
      //标签文本
      label: "",
      //文本域key值
      value: "",
      //表单域标签的的宽度
      labelWidth: "",
      //是否必填
      required: "",
      //表单组件配置
      element: [
        //输入框
        {
          // 表单模块 input
          mode: "input",
          // 输入框类型，可选值为 text、password、textarea、url、email、date、number、tel
          type: "input",
          // 输入框尺寸，可选值为large、small、default或者不设置
          size: "",
          //占位文本
          placeholder: "请输入内容",
          //是否显示清空按钮
          clearable: false,
          //是否禁用
          disabled: false,
          //是否只读
          readonly: false,
          //最大输入限制
          maxlength: null,
          //文本域默认行数，仅在 textarea 类型下有效
          rows: 4,
          //将用户的输入转换为 Number 类型
          number: false,
          //原生自动完成
          autocomplete: false,
        },
        //单选框组 radioGroup
        {
          // 表单模块 input
          mode: "radioGroup",
          // 单选框组尺寸，可选值为large、small、default或者不设置
          size: "",
          // 选择项
          options: [
            {
              //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
              label: "",
              //key值
              value: "value",
              // 是否禁用
              disabled: false,
              // 边框
              border: false,
            },
          ],
        },
        //多选框组
        {
          // 表单模块 checkboxGroup
          mode: "checkboxGroup",
          // 单选框组尺寸，可选值为large、small、default或者不设置
          size: "",
          // 选择项
          options: [
            {
              //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
              label: "",
              //key值
              value: "value",
              // 是否禁用
              disabled: false,
              // 边框
              border: false,
            },
          ],
        },
        //开关
        {
          // 开关 switch
          mode: "switch",
          // 开关尺寸，可选值为large、small、default或者不设置
          size: "",
          // 是否禁用
          disabled: false,
          // 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
          trueValue: true,
          // 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
          falseValue: false,
        },
        //选择器 select
        {
          // 选择器 select
          mode: "select ",
          //是否支持多选
          multiple: false,
          // 开关尺寸，可选值为large、small、default或者不设置
          size: "",
          // 是否禁用
          disabled: false,
          //是否可以清空选项，只在单选时有效
          clearable: false,
          //是否支持搜索
          filterable: true,
          //占位文本
          placeholder: "请选择内容",
          //选择项
          options: [
            {
              //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
              label: "",
              //key值
              value: "value",
              // 是否禁用
              disabled: false,
            },
          ],
        },
        //日期选择器
        {
          // 日期选择器 datePicker
          mode: "datePicker",
          // 日期选择器类型，可选值为 date、daterange、datetime、datetimerange、year、month
          type: "date",
          //是否支持多选
          multiple: false,
          // 开关尺寸，可选值为large、small、default或者不设置
          size: "",
          // 是否禁用
          disabled: false,
          //是否可以清空选项，只在单选时有效
          clearable: false,
          //是否支持搜索
          filterable: true,
          //是否只读
          readonly: false,
          //占位文本
          placeholder: "请选择日期",
          //两个日期的分隔符
          separator: "至",
          //是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
          confirm: true,
        },
        //时间选择器
        {
          // 时间选择器 timePicker
          mode: "timePicker",
          // 时间选择器类型，可选值为 time、timerange
          type: "date",
          //是否支持多选
          multiple: false,
          // 开关尺寸，可选值为large、small、default或者不设置
          size: "",
          // 是否禁用
          disabled: false,
          //是否可以清空选项，只在单选时有效
          clearable: false,
          //是否支持搜索
          filterable: true,
          //是否只读
          readonly: false,
          //占位文本
          placeholder: "请选择日期",
          //两个日期的分隔符
          separator: "至",
          //是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
          confirm: true,
        },
      ],
      //栅格大小
      span: 8,
    },
  ],
});
//表单对象
const formData = ref({
  
})
//监听数据变化
watch(
  () => pageFormConfig,
  (newvalue, oldvalue) => {
    console.log("person.city newvalue", newvalue, "oldvalue", oldvalue);
  },{
    deep: true
  }
);

</script> 

<style scoped lang="less">
</style>
