<!--
  功能：表格配置页面
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月08日 17:42:48
-->
<template>
  <div class="page-table-container">
    <!-- 表格工具 -->
    <div class="page-table-tool">
      <Row :gutter="15">
        <Col :xs="24" :sm="12" :md="12" :lg="16">
          <div>
            <!-- 自定义表格按钮 -->
            <slot name="tableButton"></slot>
          </div>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="8" v-if="showTool">
          <div style="text-align: right">
            <Tooltip content="刷新" placement="top" transfer>
              <Button
                shape="circle"
                icon="md-refresh"
                @click="handleRefresh"
              ></Button>
            </Tooltip>
            <Tooltip content="导出" placement="top" transfer>
              <Button
                shape="circle"
                icon="md-download"
                style="margin-left: 8px"
              ></Button>
            </Tooltip>
            <Tooltip content="打印" placement="top" transfer>
              <Button
                shape="circle"
                icon="md-print"
                style="margin-left: 8px"
              ></Button>
            </Tooltip>
            <Tooltip content="全屏" placement="top" transfer>
              <Button
                shape="circle"
                icon="md-expand"
                style="margin-left: 8px"
              ></Button>
            </Tooltip>
            <Tooltip content="设置" placement="top" transfer>
              <Button
                shape="circle"
                icon="md-settings"
                style="margin-left: 8px"
              ></Button>
            </Tooltip>
          </div>
        </Col>
      </Row>
    </div>
    <!-- 表格内容 -->
    <div class="page-table-content">
      <vxe-grid
        v-bind="gridOptions"
        ref="xGrid"
        @checkbox-all="selectAllChangeEvent"
        @checkbox-change="selectChangeEvent"
        @toggle-row-expand="expandChangeEvent"
      >
        <template #loading>
          <div class="load-box">
            <Spin size="large" />
          </div>
        </template>
        <template #empty>
          <div class="empty-box">
            <p>暂无数据</p>
          </div>
        </template>
        <template
          v-for="(item, index) in expandSlots"
          :key="index"
          #[item]="{ row }"
        >
          <slot :name="item" :row="row"></slot>
        </template>
      </vxe-grid>
    </div>
    <!-- 表格分页 -->
    <div class="page-table-pagination" v-if="showPage">
      <Page
        v-bind="pageOptions"
        @on-change="handlePageChange"
        @on-page-size-change="handlePageSizeChange"
        @on-prev="handlePrev"
        @on-next="handleNext"
      ></Page>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted, computed } from "vue";
import {
  defaultConfig
} from "./defaultConfig";
const props = defineProps({
  // 页面配置属性
  pageTableOptions: {
    type: Object,
    default: () => {},
  },
});
// 表格对象
const xGrid = ref(null);
// 表格配置
const gridOptions = ref({});
// 分页配置
const pageOptions = ref({});
// 派发事件
const emits = defineEmits([
  "onSelectAllChange",
  "onSelectChange",
  "onExpandChange",
  "onRefresh",
  "onPageChange",
  "onPageSizeChange",
  "onPrev",
  "onNext",
]);
// 判断一个元素是否为空
const isExist = (value) => {
  return typeof value !== "undefined" && value !== null;
};
// 是否显示工具栏
const showTool = computed(() => {
  return props.pageTableOptions?.showTool || defaultConfig.showTool || true;
});
// 是否显示分页
const showPage = computed(() => {
  return props.pageTableOptions?.showPage || defaultConfig.showPage || true;
});
// 初始化表格配置
const initPageTableOptions = () => {
  gridOptions.value = {
    ...defaultConfig?.gridOptions,
    ...props.pageTableOptions?.gridOptions,
  };
  pageOptions.value = {
    ...defaultConfig?.pageOptions,
    ...props.pageTableOptions?.pageOptions,
  };
};
// 设置表格配置
const setGridOptions = (key, val) => {
  gridOptions.value[key] = val;
};
// 设置分页配置
const setPageOptions = (key, val) => {
  pageOptions.value[key] = val;
};
// 全选
const selectAllChangeEvent = ({ checked }) => {
  const $table = xGrid.value;
  if ($table) {
    const records = $table.getCheckboxRecords();
    emits("onSelectAllChange", checked, records);
  }
};
// 选择
const selectChangeEvent = ({ checked }) => {
  const $table = xGrid.value;
  if ($table) {
    const records = $table.getCheckboxRecords();
    emits("onSelectChange", checked, records);
  }
};
// 展开行
const expandChangeEvent = (row) => {
  emits("onExpandChange", row);
};
// 获取选中数据
const getSelectEvent = () => {
  const $table = xGrid.value;
  if ($table) {
    const selectRecords = $table.getCheckboxRecords();
    return selectRecords;
  } else {
    return [];
  }
};
// 刷新
const handleRefresh = () => {
  emits("onRefresh");
};
// 页码改变
const handlePageChange = (val) => {
  pageOptions.value.page = val;
  emits("onPageChange", val);
};
// 页码条数改变
const handlePageSizeChange = (val) => {
  pageOptions.value.pageSize = val;
  emits("onPageSizeChange", val);
};
// 上一页
const handlePrev = (val) => {
  pageOptions.value.page = val;
  emits("onPrev", val);
};
// 下一页
const handleNext = (val) => {
  pageOptions.value.page = val;
  emits("onNext", val);
};
// 开始加载
const startLoading = () => {
  gridOptions.value.loading = true;
};
// 停止加载
const stopLoading = () => {
  gridOptions.value.loading = false;
};
// 展开行插槽
const expandSlots = ref([]);
// 获取展开行插槽
const getExpandColumnsSlots = () => {
  if (isExist(gridOptions.value.columns)) {
    gridOptions.value.columns.forEach((element) => {
      if (
        element.type === "expand" &&
        isExist(element.slots.content) &&
        typeof element.slots.content == "string"
      ) {
        expandSlots.value.push(element.slots.content);
      }
    });
  }
};
// onMounted
onMounted(() => {
  initPageTableOptions();
  getExpandColumnsSlots();
});
// 暴露属性方法
defineExpose({
  xGrid,
  showTool,
  showPage,
  gridOptions,
  pageOptions,
  startLoading,
  stopLoading,
  setGridOptions,
  setPageOptions,
  getSelectEvent,
});
</script>

<style scoped lang="less">
.page-table-container {
  background-color: #fff;
  border-radius: 4px;
  .page-table-tool {
    padding: 15px 15px 0px 15px;
  }
  .page-table-content {
    padding: 15px;
  }
  .page-table-pagination {
    padding: 0px 5px 15px 15px;
    text-align: right;
  }
}
.load-box {
  padding: 40px 100px;
  display: flex;
  justify-content: center;
}
</style>
