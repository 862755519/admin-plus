<!--
  功能：按钮权限管理
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年06月07日 17:11:25
-->
<template>
  <div>
    <PageTitle
      title="菜单权限"
      subTitle="根据不同角色返回不同的菜单数据，前端处理成路由对象渲染，请切换不同的角色账号查看效果"
    ></PageTitle>
    <div class="page-content">
      <Alert show-icon>
        不用用户角色拥有不同的菜单权限，请切换账号查看
        <template #desc>Admin角色，账号：admin，密码：123456，Test角色，账号：test，密码123456</template>
    </Alert>
      <vxe-table
        border
        size="small"
        :column-config="{ resizable: true }"
        :tree-config="{ accordion: true }"
        :data="tableData"
      >
        <vxe-column type="seq" width="50" align="center"></vxe-column>
        <vxe-column
          field="meta.title"
          title="菜单名称"
          tree-node
          width="220"
        ></vxe-column>
        <vxe-column
          field="meta.icon"
          title="菜单图标"
          width="80"
          align="center"
        >
          <template #default="{ row }">
            <Icon v-if="row.meta && row.meta.icon" :type="row.meta.icon" :size="20" />
          </template>
        </vxe-column>
        <vxe-column field="hidden" title="显示/隐藏" width="80" align="center">
          <template #default="{ row }">
            <Tag color="primary" type="border" v-if="row.hidden">隐藏</Tag>
            <Tag color="success" type="border" v-else>显示</Tag>
          </template>
        </vxe-column>
        <vxe-column field="path" title="路由地址" width="200"></vxe-column>
        <vxe-column field="name" title="路由名称" width="100"></vxe-column>
        <vxe-column
          field="alwaysShow"
          title="嵌套路由"
          align="center"
          width="80"
        >
          <template #default="{ row }">
            <span v-if="row.alwaysShow" style="color: #1e71ff">是</span>
            <span v-else style="color: #ed4014">否</span>
          </template>
        </vxe-column>
        <vxe-column
          field="redirect"
          title="重定向路由"
          width="200"
        ></vxe-column>
        <vxe-column
          field="meta.subtitle"
          title="副标题"
          min-width="100"
        ></vxe-column>
        <vxe-column
          field="meta.noCache"
          title="是否缓存"
          width="80"
          align="center"
        >
          <template #default="{ row }">
            <span v-if="row.meta.noCache" style="color: #1e71ff">是</span>
            <span v-else style="color: #ed4014">否</span>
          </template>
        </vxe-column>
        <vxe-column
          field="meta.breadcrumb"
          title="面包屑显示"
          width="100"
          align="center"
        >
          <template #default="{ row }">
            <span v-if="row.meta.breadcrumb" style="color: #1e71ff">是</span>
            <span v-else style="color: #ed4014">否</span>
          </template>
        </vxe-column>
        <vxe-column
          field="meta.activeMenu"
          title="高亮菜单"
          width="80"
          align="center"
        >
          <template #default="{ row }">
            <span v-if="row.meta.activeMenu" style="color: #1e71ff">是</span>
            <span v-else style="color: #ed4014">否</span>
          </template>
        </vxe-column>
        <vxe-column
          field="meta.affix"
          title="固定Tab栏"
          width="100"
          align="center"
        >
          <template #default="{ row }">
            <span v-if="row.meta.affix" style="color: #1e71ff">是</span>
            <span v-else style="color: #ed4014">否</span>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
const tableData = ref([]);
const getTableData = () => {
  tableData.value = JSON.parse(JSON.stringify(userStore.menuList));
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
