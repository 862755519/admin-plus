<!--
  功能：表格打印配置项
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月10日 14:29:29
-->
<template>
    <div>
      <!-- 列设置模态框 -->
      <Modal :model-value="visible" @on-cancel="cancel" title="表格打印配置项" width="700">
        <div>
          <Form :model="formData" label-position="top">
            <Row :gutter="15">
              <Col span="12">
              <FormItem label="表名（只对支持的文档类型有效）" prop="sheetName">
                <Input v-model="formData.sheetName" placeholder="请输入打印表名" clearable />
              </FormItem>
              </Col>
              <Col span="12">
              <FormItem label="数据源" prop="mode">
                <Select v-model="formData.mode">
                  <Option value="all">全部数据</Option>
                  <Option value="current">当前页数据</Option>
                  <Option value="selected">当前页选中数据</Option>
                </Select>
              </FormItem>
              </Col>
              <Col span="24">
              <FormItem label="打印列项">
                <Checkbox :indeterminate="indeterminate" :model-value="checkAll" @click.prevent="handleCheckAll"
                  style="margin-bottom: 8px; margin-top: 2px" border>全选</Checkbox>
                <Divider size="small" class="ivu-m-0" />
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                  <template v-for="item in formData.columns">
                    <Checkbox border v-if="item.field" :key="item.field" :label="item.field" style="margin-top: 8px">{{ item.title }}
                    </Checkbox>
                  </template>
                </CheckboxGroup>
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
    printOptions: {
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
    sheetName: "", // 表名
    mode: "current", // 数据源
    columns: [], // 列配置信息
  });
  // 全选状态
  const indeterminate = ref(false);
  // 是否全选
  const checkAll = ref(true);
  // 选中数据
  const checkAllGroup = ref([]);
  // 全选/取消全选
  const handleCheckAll = () => {
    if (indeterminate.value) {
      checkAll.value = false;
    } else {
      checkAll.value = !checkAll.value;
    }
    indeterminate.value = false;
    if (checkAll.value) {
      let columnsGroup = [];
      formData.columns.forEach((element) => {
        columnsGroup.push(element.field);
      });
      checkAllGroup.value = columnsGroup;
    } else {
      checkAllGroup.value = [];
    }
  };
  // 多选选择
  const checkAllGroupChange = (data) => {
    const columnsLength = formData.columns.length;
    if (data.length === columnsLength) {
      indeterminate.value = false;
      checkAll.value = true;
    } else if (data.length > 0) {
      indeterminate.value = true;
      checkAll.value = false;
    } else {
      indeterminate.value = false;
      checkAll.value = false;
    }
  };
  // emit 事件
  const emits = defineEmits(["update:modalState", "onPrint"]);
  // 取消
  const cancel = () => {
    emits("update:modalState", false);
  };
  // 确定
  const confirm = () => {
    formData.columns.forEach(element => {
      if (checkAllGroup.value.indexOf(element.field) === -1) {
        element.print = false;
      }
    });
    emits("update:modalState", false);
    console.log(formData);
    emits("onPrint", formData);
  };
  // 监听状态改变
  watch(
    () => props.modalState,
    (val) => {
      visible.value = val;
      if (val) {
        if (props.printOptions) {
          for (let key in formData) {
            formData[key] = props.printOptions[key];
          }
        }
        // 全部选中
        let columnsGroup = [];
        formData.columns.forEach((element) => {
          columnsGroup.push(element.field);
        });
        checkAllGroup.value = columnsGroup;
      }
    }
  );
  </script> 
  <style scoped lang="less"></style>
    
  