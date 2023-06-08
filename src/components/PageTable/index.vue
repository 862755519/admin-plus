<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月07日 08:35:44
-->
<template>
  <div class="page-table">
    <div class="">
      <Form :model="formData" inline :label-width="80" :rules="formRules">
        <FormItem label="Input">
          <Input
            v-model="formData.input"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formData.select" style="width: 200px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="Input">
          <Input
            v-model="formData.input"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
// 接受参数
const props = defineProps({
  //表格配置项
  pageTableOptions: {
    type: Object,
    require: true,
    default: {
      //查询表单配置
      formOptions: {
          //是否显示
          show: true,
          //开启行内表单
          inline: true,
          //表单验证规则
          rules: {},
          //表单项配置
          formItem: [
            // {
            //     //表单类型 可选值为 Input、Select、InputNumber、DatePicker、TimePicker
            //     type: "input",
            //     //输入框类型，仅在type值为input时有效，可选值为 text、password、textarea、url、email、date、number、tel
            //     textType: "text",
            //     //日期类型，仅在type值为DatePicker时有效，显示类型，可选值为 date、daterange、datetime、datetimerange、year、month
            //     dateType: "date",
            //     //时间类型，仅在type值为TimePicker时有效，显示类型，可选值为 time、timerange
            //     timeType: "time",
            //     //输入框尺寸，可选值为large、small、default或者不设置
            //     size: "",
            //     //表单提示语
            //     placeholder: "请输入内容",
            //     //表单key
            //     valueKey: "input",
            //     //表单类型
            //     labelName: "输入框",
            //     //表单默认数据
            //     defaultValue: null,
            //     //表单数据源 仅在下拉选择时有效
            //     dataArray: [{ label: "", value: "" }],
            //     //表单清空按钮
            //     clearable: true,
            //     //将用户的输入转换为 Number 类型 仅在type值为input时有效
            //     number: false,
            //     //文本域默认行数，仅在type值为input，textType为textarea时有效
            //     rows: 4,
            //     //宽度 单位px
            //     width: 200,
            //   },
          ],
          //表单域标签的位置，可选值为 left、right、top
          labelPosition: "left",
          //表单域标签的宽度
          labelWidth: 80
      },
      //表格配置
      tableOptions: {
        //是否显示
        show: true,
        //表格id
        id: "",
        //表格名称
        title: "",
        //表格数据
        data: [],
        //高度
        height: "auto",
        //最大高度
        maxHeight: "auto",
        //自动监听父元素
        autoResize: true,
        //自适应
        syncResize: true,
        //斑马线
        stripe: true,
        //边框
        border: true,
        //尺寸 medium, small, mini
        size: "medium",
        //对齐方式 left（左对齐）, center（居中对齐）, right（右对齐）
        align: "left",
        //超出显示省略号
        showOverflow: false,
        //列配置
        columns: [
          //类配置信息
          {
            // seq 序号 checkbox 选择 radio 单选 expand 展开行
            type: "",
            // 列key
            field: "",
            // 列名称
            title: "",
            // 列宽度
            width: "auto",
            // 列宽拖动
            resizable: true,
            // 固定位置 left（固定左侧）, right（固定右侧）
            fixed: "",
            // 对齐方式 left（左对齐）, center（居中对齐）, right（右对齐）
            align: "left",
            // 超出显示省略号 继承table
            showOverflow: "",
            // 排序
            sortable: true,
          },
        ],
      },
      //分页配置
      pageOptions: {
        //是否显示
        show: true,
        //当前页
        page: 1,
        //每页条数
        pageSize: 10,
        //页码条数配置
        pageSizeArray: [10, 20, 30, 50],
        //总数
        total: 0
      }
    },
  },
});
// 表单验证规则
const formRules = computed(() => {
  console.log(props);
  if (props.formOptions && props.formOptions.rules) {
    return props.formOptions.rules;
  } else {
    return null;
  }
});
//表单对象
const formData = reactive({
  input: "",
  select: "",
  radio: "male",
  checkbox: [],
  switch: true,
  date: "",
  time: "",
  slider: [20, 50],
  textarea: "",
});
</script> 

<style scoped lang="less">
.page-table {
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
}
</style>
