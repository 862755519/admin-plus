<!--
  功能：表格配置项
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月10日 14:29:29
-->
<template>
  <div>
    <!-- 列设置模态框 -->
    <Modal :model-value="visible" @on-cancel="cancel" title="表格配置项" width="650">
      <div>
        <Form :model="formData" label-position="top">
          <Row :gutter="10">
            <Col span="12">
            <FormItem label="表格尺寸" prop="size">
              <Select v-model="formData.size">
                <Option value="medium">常规</Option>
                <Option value="small">小型</Option>
                <Option value="mini">迷你</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="表格边框" prop="border">
              <Select v-model="formData.border">
                <Option value="full">完整边框</Option>
                <Option value="outer">外边框</Option>
                <Option value="inner">内边框</Option>
                <Option value="none">无边框</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="斑马条纹" prop="stripe">
              <BooleanRodio v-model="formData.stripe"></BooleanRodio>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="边框圆角" prop="round">
              <BooleanRodio v-model="formData.round"></BooleanRodio>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="列对齐" prop="align">
              <Select v-model="formData.align">
                <Option value="left">左对齐</Option>
                <Option value="center">居中对齐</Option>
                <Option value="right">右对齐</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="表格高度" prop="height">
              <InputNumber v-model="formData.height" style="width: 100%" />
            </FormItem>
            </Col>
            <Col span="24">
            <FormItem label="显示列项">
              <div class="check-box">
                <Row :gutter="10">
                  <template v-for="item in formData.columns">
                    <Col v-if="item.field" :key="item.field" span="4">
                    <div :key="item.field" :class="['check-item', item.visible ? 'check-item-active' : '']">
                      {{ item.title }}</div>
                    </Col>
                  </template>
                </Row>
              </div>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
      <template #footer>
        <div>
          <Button @click="cancel">取消</Button>
          <Button @click="confirm" type="primary">确定</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>
  
<script setup>
import { ref, reactive, watch } from "vue";
// 表单配置项
const props = defineProps({
  settingOptions: {
    type: Object,
    default: () => { },
  },
  modalState: {
    type: Boolean,
    default: false,
  },
});
// 弹框状态
const visible = ref(props.modalState);
// 配置项表单
const formData = reactive({
  border: "full", // 是否带有边框 default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）
  stripe: true, // 是否带有斑马纹（需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）
  height: 500, // 表格的高度；支持铺满父容器或者固定高度，如果设置 auto 为铺满父容器（如果设置为 auto，则必须确保存在父节点且不允许存在相邻元素）
  round: false, // 是否有圆角
  size: "small", // 表格尺寸 medium, small, mini
  align: "left", // 所有列的对齐方式 left（左对齐）, center（居中对齐）, right（右对齐）
  showHeader: true, // 是否显示表头
  headerAlign: "left", // 所有的表头列的对齐方式
  columns: [], // 列配置信息
});
// emit 事件
const emits = defineEmits(["update:modalState", "onSetting"]);
// 取消
const cancel = () => {
  emits("update:modalState", false);
};
// 确定
const confirm = () => {
  formData.columns.forEach((element, index) => {
    if (checkAllGroup.value.indexOf(element.field) === -1) {
      console.log("5555");
      formData.columns[index].visible = 666;
    } else {
      console.log("2221");
      formData.columns[index].visible = 444;
    }
  });
  console.log("171");
  console.log(formData.columns);
  emits("update:modalState", false);
  emits("onSetting", formData);
};
// 监听状态改变
watch(
  () => props.modalState,
  (val) => {
    visible.value = val;
    if (val) {
      if (props.settingOptions) {
        for (let key in formData) {
          formData[key] = props.settingOptions[key];
        }
      }
      console.log(formData);
    }
  }
);
</script> 
  
<style scoped lang="less">
.check-box {
  height: auto;
  margin-top: 2px;

  .check-item {
    text-align: left;
    height: 32px;
    line-height: 31px;
    // background-color: #f8f8f9;
    border: 1px solid #dcdee2;
    color: #515a6e;
    border-radius: 4px;
    padding: 0px 10px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .check-item-active {
    color: #165DFF;
    border: 1px solid #165DFF;
    // background-color: rgba(45, 140, 240, 0.04)
  }
}
</style>
  