<!--
  功能：消息
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月10日 15:53:56
-->
<template>
  <div id="i-layout-navbar-notify" class="i-layout-navbar-notify">
    <Dropdown trigger="click" >
      <Badge dot :offset="[16, 0]">
        <Icon class="i-icon" type="md-notifications-outline" />
      </Badge>
      <template #list>
        <div class="i-notify-box">
          <div class="i-notify-tabs">
            <template v-for="item in tabList" :key="item.id">
            <div :class="['i-notify-tabs-item',item.id == tabIndex ? 'i-notify-tabs-item-active' : '']" @click="selectTab(item)">
              {{item.name}}({{ item.count }})
            </div>
          </template>
          </div>
          <div class="i-notify-content">
            <!-- 通知 -->
            <template v-if="tabIndex == 1">
              <div class="msg-box" v-for="item in noticeList" :key="item.id">
                <ColorIcon
                  :size="32"
                  :icon="item.icon"
                  style="margin-right: 10px"
                  :color="item.color"
                />
                <div class="msg-left">
                  <div class="msg-title">{{ item.title }}</div>
                  <div class="msg-time">{{ item.time }}</div>
                </div>
              </div>
            </template>
            <!-- 消息 -->
            <template v-if="tabIndex == 2">
              <div class="msg-box" v-for="item in messageList" :key="item.id">
                <Avatar :src="item.url" style="margin-right: 10px" />
                <div class="msg-left">
                  <div class="msg-title">{{ item.title }}</div>
                  <div class="msg-time">{{ item.text }}</div>
                </div>
              </div>
            </template>
            <template v-if="tabIndex == 3">
              <div class="no-content">
                <img src="@/assets/images/nodata.png" alt="" srcset="" />
              </div>
            </template>
          </div>
          <div class="i-notify-footer">查看更多</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
<script setup>
import { ref } from "vue";
//tabs
const tabList = ref([
  {
    id:1,
    name:"通知",
    count:8
  },
  {
    id:2,
    name:"消息",
    count:2
  },
  {
    id:3,
    name:"待办",
    count:0
  }
])
//tab下标
const tabIndex = ref(1);
//选择tab
const selectTab = (event) => {
   tabIndex.value = event.id
}
//消息
const messageList = ref([
  {
    id: 1,
    url: "https://i.loli.net/2017/08/21/599a521472424.jpg",
    title: "马克思·查",
    text: "邀请你加入组织【Admin Plus开源共享】",
  },
  {
    id: 2,
    url: "http://www.lingchen.kim/tao_admin/static/img/avatar6.dca8715.jpg",
    title: "岸田清文",
    text: "通知你跟你Gitee主分支代码",
  },
]);
//通知
const noticeList = ref([
  {
    id: 1,
    icon: "md-snow",
    color: "#165DFF",
    title: "全局水印",
    time: "2023-06-10 14:23",
  },
  {
    id: 2,
    icon: "md-school",
    color: "#19be6b",
    title: "菜单权限",
    time: "2023-06-09 09:23",
  },
  {
    id: 3,
    icon: "ios-hand",
    color: "#ff9900",
    title: "按钮权限",
    time: "2023-06-08 18:45",
  },
  {
    id: 4,
    icon: "md-heart",
    color: "#ed4014",
    title: "全局主题配置",
    time: "2023-06-08 12:43",
  },
  {
    id: 5,
    icon: "logo-buffer",
    color: "#2d40f0",
    title: "数据字典管理",
    time: "2023-06-10 14:23",
  },
  {
    id: 6,
    icon: "md-mail-open",
    color: "#f02d8e",
    title: "部署服务器预览环境",
    time: "2023-06-10 14:23",
  },
  {
    id: 7,
    icon: "md-tablet-portrait",
    color: "#2dd9f0",
    title: "适配手机、平板",
    time: "2023-06-10 14:23",
  },
  {
    id: 8,
    icon: "ios-stats",
    color: "#b92df0",
    title: "工作空间",
    time: "2023-06-4 11:13",
  },
]);
</script>

<style lang="less" scoped>
.i-notify-content::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.i-notify-content::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #bebdbd;
}
.i-notify-content::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
.i-layout-navbar-notify {
  display: inline-block;
  cursor: pointer;
  line-height: 64px;
  color: #515a6e;
  padding: 0px 10px;

  .i-icon {
    font-size: 20px;
  }
}
.no-content {
  text-align: center;
  margin-top: 80px;
  img {
    width: 150px;
  }
  .no-content-text {
    color: #808695;
    font-size: 12px;
  }
}
.i-notify-box {
  width: 320px;
  height: auto;
  padding: 0px;
  background-color: #fff;
  .i-notify-tabs {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e8eaec;
  }
  .i-notify-tabs-item {
    width: 33%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #515a6e;
    font-size: 15px;
    position: relative;
    &:hover {
      color: #165DFF;
    }
  }
  .i-notify-tabs-item-active {
    color: #165DFF;
    font-size: 15px;
  }
  .i-notify-tabs-item-active::after {
    content: "";
    position: absolute;
    bottom: -0.5px;
    height: 2px;
    width: 46%;
    left: 27%;
    background-color: #165DFF;
  }
  .i-notify-content {
    height: 300px;
    overflow-y: scroll;
    background-color: #fff;
  }
  .msg-box {
    line-height: normal !important;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #e8eaec;
  }
  .msg-title {
    color: #515a6e;
    font-size: 14px;
  }
  .msg-time {
    color: #808695;
    font-size: 12px;
    margin-top: 2px;
  }
  .i-notify-footer {
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #515a6e;
    font-size: 14px;
    border-top: 1px solid #e8eaec;
    &:hover {
      color: #165DFF;
    }
  }
}
</style>
