<!--
  功能：表格配置页面
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月08日 17:42:48
-->
<template>
  <div ref="pageTable" style="background-color: #f5f5f5">
    <div class="page-tool-box" v-if="showActionBar">
      <div v-if="gridOptions.showButton">
        <Button v-for="(item, index) in gridOptions.buttonConfig" @click="handleButtonClick(item)" :key="index"
          :type="item.type" style="margin-right: 8px">{{ item.name }}</Button>
        <!-- 自定义表格按钮 -->
        <slot name="tableButton"></slot>
      </div>
      <div v-if="gridOptions.showTool">
        <Tooltip content="刷新" placement="top" transfer>
          <Button shape="circle" icon="md-refresh" @click="handleRefresh"></Button>
        </Tooltip>
        <Tooltip content="导出" placement="top" transfer>
          <Button shape="circle" icon="md-download" style="margin-left: 8px" @click="handleExport"></Button>
        </Tooltip>
        <Tooltip content="打印" placement="top" transfer>
          <Button shape="circle" icon="md-print" style="margin-left: 8px" @click="handlePrint"></Button>
        </Tooltip>
        <Tooltip content="全屏" placement="top" transfer>
          <Button shape="circle" @click="toggleClick" :icon="isFullscreen ? 'md-contract' : 'md-expand'"
            style="margin-left: 8px"></Button>
        </Tooltip>
        <Tooltip content="设置" placement="top" transfer>
          <Button shape="circle" icon="md-settings" @click="handleSetting" style="margin-left: 8px"></Button>
        </Tooltip>
      </div>
    </div>
    <div class="page-table-box">
      <vxe-grid v-bind="gridOptions" ref="xGrid" @checkbox-all="selectAllChangeEvent"
        @checkbox-change="selectChangeEvent">
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
      </vxe-grid>
    </div>
    <div class="page-sorter-box" v-if="gridOptions.showPage">
      <Page :total="gridOptions.total" show-sizer show-total :current="gridOptions.page"
        :page-size-opts="gridOptions.pageSizeOpts" :page-size="gridOptions.pageSize" @on-change="handlePageChange"
        @on-page-size-change="handlePageSizeChange" />
    </div>
    <!-- 表格导出设置 -->
    <Export v-model:modalState="exportState" :exportOptions="exportData" @onExport="exportCallback"></Export>
    <!-- 表格设置 -->
    <Setting v-model:modalState="settingState" :settingOptions="settingData" @onSetting="settingCallback"></Setting>
    <!-- 表格打印设置 -->
    <Print v-model:modalState="printState" :printOptions="printData" @onPrint="printCallback"></Print>
  </div>
</template>

<script setup>
import screenfull from "screenfull";
import { Message, Spin } from "view-ui-plus";
import {
  ref,
  watch,
  computed,
  reactive,
  onMounted,
  onBeforeUnmount
} from "vue";
import Setting from "./setting.vue";
import Export from "./export.vue";
import Print from "./print.vue"
const props = defineProps({
  // 表格配置属性
  pageTableOptions: {
    type: Object,
    default: () => { },
  },
});
// 表格对象
const xGrid = ref(null);
// 表格导出模态框
const exportState = ref(false);
// 表格导出配置数据
const exportData = ref(null);
// 表格配置模态框
const settingState = ref(false);
// 表格配置数据
const settingData = ref(null);
// 表格打印模态框
const printState = ref(false);
// 表格打印数据
const printData = ref(null);
// emit 事件
const emits = defineEmits(["onRefresh", "onAddData", "onEditData", "onDeleteData", "onSelectEvent", "onPageChange", "onPageSizeChange"]);
// 表格配置项,详见vxe-table v4官方文档 https://vxetable.cn/#/grid/api
const gridOptions = reactive({
  id: null, // 唯一标识（被某些特定的功能所依赖）
  filename: "", // 导出文件名
  sheetName: "", // 表名
  showTool: true, // 是否显示表格工具
  showPage: true, // 是否展示分页
  showButton: true, // 是否显示操作按钮
  loading: false,
  buttonConfig: [
    // 按钮配置信息
    {
      name: "新增", // 按钮名称
      type: "primary", // type 为 primary、dashed、text、info、success、warning、error
      sign: "add", // 操作标识 添加（add），编辑（edit），删除（delete）不填则为普通按钮
      permission: "add", // 按钮权限
      method: "onAddData", // 点击回调方法
    },
    {
      name: "编辑", // 按钮名称
      type: "success", // type 为 primary、dashed、text、info、success、warning、error
      sign: "edit", // 操作标识 添加（add），编辑（edit），删除（delete）不填则为普通按钮
      permission: null, // 按钮权限
      method: "onEditData", // 点击回调方法
    },
    {
      name: "删除", // 按钮名称
      type: "error", // type 为 primary、dashed、text、info、success、warning、error
      sign: "delete", // 操作标识 添加（add），编辑（edit），删除（delete）不填则为普通按钮
      permission: null, // 按钮权限
      method: "onDeleteData", // 点击回调方法
    },
  ],
  border: "full", // 是否带有边框 default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）
  stripe: true, // 是否带有斑马纹（需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）
  syncResize: false, // 自动跟随某个属性的变化去重新计算表格，和手动调用 recalculate 方法是一样的效果（对于通过某个属性来控制显示/隐藏切换时可能会用到）
  autoResize: false, // 自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
  height: null, // 表格的高度；支持铺满父容器或者固定高度，如果设置 auto 为铺满父容器（如果设置为 auto，则必须确保存在父节点且不允许存在相邻元素）
  // minHeight: 800, // 表格最小高度
  // maxHeight: 800, // 表格最大高度
  round: true, // 是否有圆角
  size: "small", // 表格尺寸 medium, small, mini
  align: "left", // 所有列的对齐方式 left（左对齐）, center（居中对齐）, right（右对齐）
  headerAlign: "left", // 所有的表头列的对齐方式
  footerAlign: "left", // 所有的表头列的对齐方式
  showHeader: true, // 是否显示表头
  columnConfig: {
    // 列配置信息
    resizable: true, // 调整列宽度
    isCurrent: true, // 高亮当前列
    isHover: true, // 高亮当前头
  },
  rowConfig: {
    // 行配置信息
    isCurrent: true, // 高亮当前行
    isHover: true, // 高亮当前头
  },
  columns: [], // 列配置信息
  total: 0, // 数据总数
  pageSizeOpts: [10, 20, 30, 50], // 每页条数切换的配置
  pageSize: 10, // 每页条数
  page: 1, // 当前页
  data: [], // 表格数据
});
// 是否显示操作栏
const showActionBar = computed(() => {
  return gridOptions.showTool || gridOptions.showButton;
});
// 打印
const handlePrint = () => {
  printData.value = {
    sheetName: gridOptions.sheetName, // 表名
    mode: "current", // 数据源
    columns: gridOptions.columns, // 列配置信息
  };
  printState.value = true;
};
// 打印回调
const printCallback = (event) => {
  console.log(event);
};
// 导出
const handleExport = () => {
  gridOptions.columns.forEach((element) => {
    element.export = true;
  });
  exportData.value = {
    filename: gridOptions.filename, // 导出文件名
    sheetName: gridOptions.sheetName, // 表名
    type: "csv", // 导出类型
    mode: "current", // 数据源
    columns: gridOptions.columns, // 列配置信息
  };
  exportState.value = true;
};
// 导出回调
const exportCallback = (event) => {
  console.log("导出数据");
  console.log(event);
  const $table = xGrid.value;
  if ($table) {
    $table.exportData(event);
  }
};
// 设置
const handleSetting = () => {
  gridOptions.columns.forEach(element => {
     if(element.visible == undefined && element.visible == null){
      element.visible = true;
     }
  });
  settingData.value = {
    border: gridOptions.border,
    stripe: gridOptions.stripe,
    height: gridOptions.height,
    round: gridOptions.round,
    size: gridOptions.size,
    align: gridOptions.align,
    showHeader: gridOptions.showHeader,
    headerAlign: gridOptions.headerAlign,
    columns: gridOptions.columns,
  };
  settingState.value = true;
};
// 隐藏指定列
const handleHideColumn = (field) => {
  const $table = xGrid.value;
  if ($table) {
    $table.hideColumn(field);
  }
};
// 显示指定列
const handleShowColumn = (field) => {
  const $table = xGrid.value;
  if ($table) {
    $table.showColumn(field);
  }
};
// 设置回调
const settingCallback = (event) => {
  console.log(event);
  for (let key in event) {
    gridOptions[key] = event[key];
  }
  console.log(gridOptions);
  // 隐藏/显示列
  gridOptions.columns.forEach((element) => {
    if (element.visible) {
      //显示
      // handleShowColumn(element.field);
    } else {
      //隐藏
      // handleHideColumn(element.field);
    }
  });
};
// 刷新
const handleRefresh = () => {
  emits("onRefresh");
};
// 表格按钮
const handleButtonClick = (event) => {
  emits(event.method);
}
// 全选 取消全选
const selectAllChangeEvent = ({ checked }) => {
  const $table = xGrid.value
  if ($table) {
    const records = $table.getCheckboxRecords()
    emits("onSelectEvent", records);
  }
}
// 选择改变 
const selectChangeEvent = ({ checked }) => {
  const $table = xGrid.value
  if ($table) {
    const records = $table.getCheckboxRecords()
    emits("onSelectEvent", records);
  }
}
// 页码改变
const handlePageChange = (event) => {
  emits("onPageChange", event);
}
// 每页条数改变
const handlePageSizeChange = (event) => {
  emits("onPageSizeChange", event);
}
/**
 * 局部全屏
 */
const pageTable = ref(null);
// 是否全屏
const isFullscreen = ref(false);
// 改变
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
};
// 初始化
const init = () => {
  if (screenfull.isEnabled) {
    screenfull.on("change", change);
  }
};
// 切换全屏
const toggleClick = () => {
  if (!screenfull.isEnabled) {
    Message.error("你的浏览器不支持全屏");
    return false;
  }
  screenfull.toggle(pageTable.value);
};
//销毁
const destroy = () => {
  if (screenfull.isEnabled) {
    screenfull.off("change", change);
  }
};
// onMounted
onMounted(() => {
  init();
});
// onBeforeUnmount
onBeforeUnmount(() => {
  destroy();
});
// 监听数据变化
watch(
  () => props.pageTableOptions,
  (val) => {
    if (val) {
      for (let key in val) {
        if (val[key] !== null && val[key] !== undefined) {
          gridOptions[key] = val[key];
        }
      }
    }
  },
  { deep: true, immediate: true }
);
</script> 

<style scoped lang="less">
.page-tool-box {
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 10px;
}

.page-table-box {
  border-radius: 4px;
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 10px;
  position: relative;
}

.page-sorter-box {
  margin-top: 10px;
  text-align: right;
  border-radius: 4px;
  padding: 15px 6px 15px 15px;
  background-color: #fff;
  border-radius: 4px;
}

.empty-box {
  color: #999999;
}

.load-box {
  padding: 40px 100px;
  display: flex;
  justify-content: center;
}
</style>
