<!--
  功能：数据权限
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月07日 17:11:25
-->
<template>
  <div>
    <PageTitle
      title="数据权限"
      subTitle="相同接口根据不同角色返回不同的列表数据"
    ></PageTitle>
    <div class="page-content">
      <Alert show-icon>
        不用用户角色拥有不同的数据权限，请切换账号查看
        <template #desc
          >Admin角色，账号：admin，密码：123456，Test角色，账号：test，密码123456</template
        >
      </Alert>
      <div style="margin-top: 15px">
        <vxe-table
          border
          size="small"
          :column-config="{ resizable: true }"
          :tree-config="{ accordion: true }"
          :data="tableData"
        >
          <vxe-column type="seq" width="50" align="center"></vxe-column>
          <vxe-column
            field="operName"
            title="操作账号"
            width="100"
          ></vxe-column>
          <vxe-column field="title" title="操作内容" width="200"></vxe-column>
          <vxe-column
            field="operTime"
            title="操作时间"
            width="150"
          ></vxe-column>
          <vxe-column field="operIP" title="操作IP" width="150"></vxe-column>
          <vxe-column
            field="operLocation"
            title="操作地址"
            width="200"
          ></vxe-column>
          <vxe-column
            field="requestMethod"
            title="请求方式"
            width="100"
          ></vxe-column>
          <vxe-column
            field="operParam"
            title="请求参数"
            width="200"
          ></vxe-column>
          <vxe-column field="operUrl" title="请求路径" width="200"></vxe-column>
          <vxe-column
            field="jsonResult"
            title="返回接口"
            min-width="200"
          ></vxe-column>
        </vxe-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Message } from "view-ui-plus";
import { getLogList } from "@/api/modules/permission.js";
const tableData = ref([]);
//获取数据
const getTableData = () => {
  getLogList().then((res) => {
    const { code, data, message } = res;
    if (code == 200) {
      setTimeout(() => {
        tableData.value = data;
        Message.success("获取数据成功");
      }, 500);
    } else {
      Message.error(message || "获取数据成功");
    }
  });
};
getTableData();
</script> 

<style scoped lang="less">
.page-content {
  padding: 15px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
