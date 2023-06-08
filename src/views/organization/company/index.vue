<!--
  功能：企业管理
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月05日 10:00:09
-->
<template>
  <div>
    <PageTitle
      title="公司管理"
      subTitle="公司，分子公司，法人，营业执照，经营范围，系统账号管理。"
    ></PageTitle>
    <div class="page-content">
      <div class="page-search-box">
        <Form :model="queryData" :label-width="70" inline>
          <FormItem label="公司名称">
            <Input
              v-model="queryData.name"
              clearable
              placeholder="请输入名称"
              style="width: 200px"
            ></Input>
          </FormItem>
          <FormItem label="公司类型">
            <Select
              v-model="queryData.type"
              placeholder="请选择类型"
              clearable
              filterable
              style="width: 200px"
            >
              <Option
                v-for="item in typeList"
                :key="item.value"
                :value="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <FormItem label="公司法人">
            <Input
              v-model="queryData.legalPerson"
              clearable
              style="width: 200px"
              placeholder="请输入法人"
            ></Input>
          </FormItem>
          <FormItem label="信用代码">
            <Input
              v-model="queryData.creditCode"
              clearable
              style="width: 200px"
              placeholder="请输入信用代码"
            ></Input>
          </FormItem>
          <FormItem label="注册时间">
            <DatePicker
              v-model="queryData.setupDateTime"
              clearable
              type="daterange"
              placeholder="请选择注册时间"
              style="width: 200px"
            />
          </FormItem>
          <FormItem :label-width="0">
            <Button type="primary">查询</Button>
            <Button style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </div>
      <div class="page-tool-box">
        <div>
          <Button type="primary">新增</Button>
          <Button type="error" style="margin-left: 8px">停用</Button>
        </div>
        <div>
          <Tooltip content="刷新" placement="top">
            <Button shape="circle" icon="md-refresh"></Button>
          </Tooltip>
          <Tooltip content="全屏" placement="top">
            <Button
              shape="circle"
              icon="md-expand"
              style="margin-left: 8px"
            ></Button>
          </Tooltip>
          <Tooltip content="导出" placement="top">
            <Button
              shape="circle"
              icon="md-download"
              style="margin-left: 8px"
            ></Button>
          </Tooltip>
          <Tooltip content="设置" placement="top">
            <Button
              shape="circle"
              icon="md-settings"
              style="margin-left: 8px"
            ></Button>
          </Tooltip>
        </div>
      </div>
      <div class="page-table-box">
        <vxe-table
          :data="tableData"
          border
          round
          size="small"
          auto-resize
          sync-resize
          stripe
          show-overflow
          height="440"
          align="left"
        >
          <vxe-column type="checkbox" width="50" align="center"></vxe-column>
          <!-- <vxe-column type="seq" width="50" align="center"></vxe-column> -->
          <vxe-column field="name" title="公司名称" width="200"></vxe-column>
          <vxe-column field="legalPerson" title="法人" width="80"></vxe-column>
          <vxe-column
            field="creditCode"
            title="统一信用代码"
            width="180"
          ></vxe-column>
          <vxe-column
            field="registeredCapital"
            title="注册资本（万元）"
            width="130"
          ></vxe-column>
          <vxe-column
            field="setupDateTime"
            title="注册时间"
            width="130"
          ></vxe-column>
          <vxe-column field="type" title="公司类型" width="200"></vxe-column>
          <vxe-column field="email" title="邮箱" width="200"></vxe-column>
          <vxe-column
            field="address"
            title="公司地址"
            width="auto"
          ></vxe-column>
          <!-- <vxe-column
            field="descript"
            width="300"
            title="经营范围"
          ></vxe-column>
          <vxe-column
            field="createTime"
            title="创建时间"
            width="120"
          ></vxe-column>
          <vxe-column
            field="createUserName"
            title="创建人"
            width="100"
          ></vxe-column>
          <vxe-column
            field="updateTime"
            title="更新时间"
            width="120"
          ></vxe-column>
          <vxe-column
            field="updateUserName"
            title="更新人"
            width="100"
          ></vxe-column> -->
          <vxe-column title="操作" fixed="right" width="120" align="center">
            <template #default="{ row }">
              <ILink type="success" @click="editData(row)">编辑</ILink>
              <Divider type="vertical" />
              <ILink type="error" @click="delData(row)">删除</ILink>
            </template>
          </vxe-column>
        </vxe-table>
        <Spin size="large" fix :show="tableLoading"></Spin>
      </div>
      <div class="page-sorter-box">
        <Page :total="total" show-sizer show-total />
      </div>
    </div>
  </div>
</template>

<script setup>
//表单对象
import { getCompanyList } from "@/api/modules/organization";
import { Message } from "view-ui-plus";
import { ref, reactive } from "vue";
// 加载动画
const tableLoading = ref(false);
//企业类型
const typeList = ref([
  {
    label: "无限责任公司",
    value: 1,
  },
  {
    label: "有限责任公司",
    value: 2,
  },
  {
    label: "两合公司",
    value: 3,
  },
  {
    label: "股份有限公司",
    value: 4,
  },
  {
    label: "股份两合公司",
    value: 5,
  },
]);
//总数
const total = ref(0);
//查询参数
const queryData = reactive({
  page: 1,
  pageSize: 10,
  name: "",
  type: "",
  legalPerson: "",
  creditCode: "",
  setupDateTime: "",
});
//表格数据
const tableData = ref([]);
//获取数据
const getTableData = () => {
  tableLoading.value = true;
  getCompanyList().then((res) => {
    const { code, data, message } = res;
    if (code == 200) {
      setTimeout(() => {
        tableLoading.value = false;
        tableData.value = data.list;
        total.value = data.total;
        Message.success("获取数据成功");
      }, 1000);
    } else {
      tableLoading.value = false;
      Message.error(message || "获取数据成功");
    }
  });
};
//编辑数据
const editData = (event) => {
  console.log(event);
};
//删除数据
const delData = (event) => {
  console.log(event);
};
getTableData();
</script> 

<style scoped lang="less">
.page-content {
  .page-search-box {
    border-radius: 4px;
    padding: 15px 15px 0px 15px;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 10px;
  }
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
}
</style>
