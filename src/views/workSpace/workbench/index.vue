<!--
  功能：工作空间
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月30日 09:50:39
-->
<template>
  <div class="page-container">
    <Row :gutter="10">
      <!-- 访问量 -->
      <Col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="page-user">
          <div class="user-left">
            <Avatar
              :size="60"
              src="https://i.loli.net/2017/08/21/599a521472424.jpg"
            />
            <div class="user-box">
              <div class="user-name">早安，Admin，开始您一天的工作吧！</div>
              <div class="user-weather">
                今日阴转小雨，22℃ - 32℃，出门记得带伞哦
              </div>
            </div>
          </div>
          <div class="user-right">
            <div class="user-count">
              <div class="user-count-name">待办项</div>
              <div class="user-count-num">16</div>
            </div>
            <Divider type="vertical" style="height: 25px" />
            <div class="user-count">
              <div class="user-count-name">审批</div>
              <div class="user-count-num">8</div>
            </div>
            <Divider type="vertical" style="height: 25px" />
            <div class="user-count">
              <div class="user-count-name">任务数</div>
              <div class="user-count-num">24</div>
            </div>
          </div>
        </div>
      </Col>
      <!-- 网站导航 -->
      <Col :xs="24" :sm="24" :md="18" :lg="18">
        <div class="nav-box">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="ios-paper-plane" color="#165DFF" />
              <span>网站导航</span>
            </div>
          </div>
          <Row :gutter="15" style="padding: 15px 15px 0px 15px">
            <Col
              :xs="24"
              :sm="12"
              :md="8"
              :lg="8"
              v-for="item in navList"
              :key="item.id"
            >
              <div class="nav-item">
                <img :src="item.image" alt="" srcset="" />
                <div class="nav-content">
                  <div class="nav-item-name">{{ item.name }}</div>
                  <div class="nav-item-text">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <!-- 快捷操作 -->
      <Col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="nav-box">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="md-swap" color="#19be6b" />
              <span>快捷操作</span>
            </div>
          </div>
          <div class="menu-box">
            <div class="menu-box-item" v-for="item in menuList" :key="item.id">
              <Icon
                :type="item.icon"
                class="menu-box-icon"
                :size="24"
                :color="item.color"
              />
              <div class="menu-box-name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </Col>
      <!-- 代办事项 -->
      <Col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="nav-box">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="md-swap" color="#ff7306" />
              <span>代办事项</span>
            </div>
          </div>
          <div class="hand-box">
            <div class="hand-box-row" v-for="item in handList" :key="item.id">
              <SvgIcon :type="item.svg" :size="40" />
              <div class="hand-box-centent">
                <div class="hand-name">{{ item.name }}</div>
                <div class="hand-text">{{ item.time }}</div>
              </div>
              <div class="hand-but">
                <ILink type="primary">处理</ILink>
                <Divider type="vertical" />
                <ILink type="error">忽略</ILink>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <!-- 审批 -->
      <Col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="nav-box">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="md-mail" color="#ed4014" />
              <span>审批</span>
            </div>
          </div>
          <div class="table-box">
            <Table :columns="tableColumns" :data="tableData"></Table>
          </div>
        </div>
      </Col>
      <!-- 审批 -->
      <Col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="nav-box">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="md-mail" color="#ff9900" />
              <span>项目列表</span>
            </div>
          </div>
          <div class="project-box">
            <Row :gutter="15" style="padding: 15px 15px 0px 15px">
              <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="project-title">宣威至会泽高速公路</div>
              </Col>
              <Col
                :xs="24"
                :sm="12"
                :md="6"
                :lg="6"
                v-for="item in navList"
                :key="item.id"
              >
                <div class="project-item">
                  <div class="project-flex">
                    <SvgIcon type="project1" :size="44"></SvgIcon>
                    <div class="project-content">
                      <div class="project-name">{{ item.name }}</div>
                      <div class="project-text">
                        {{ item.text }}
                      </div>
                    </div>
                  </div>
                  <div class="project-footer">
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="project-title" style="margin-top: 15px">
                  东川至巧家G8620国道
                </div>
              </Col>
              <Col
                :xs="24"
                :sm="12"
                :md="6"
                :lg="6"
                v-for="item in navList"
                :key="item.id"
              >
                <div class="project-item">
                  <div class="project-flex">
                    <SvgIcon type="project2" :size="44"></SvgIcon>
                    <div class="project-content">
                      <div class="project-name">{{ item.name }}</div>
                      <div class="project-text">
                        {{ item.text }}
                      </div>
                    </div>
                  </div>
                  <div class="project-footer">
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="project-title" style="margin-top: 15px">
                  宣威至会泽高速公路
                </div>
              </Col>
              <Col
                :xs="24"
                :sm="12"
                :md="6"
                :lg="6"
                v-for="item in navList"
                :key="item.id"
              >
                <div class="project-item">
                  <div class="project-flex">
                    <SvgIcon type="project3" :size="44"></SvgIcon>
                    <div class="project-content">
                      <div class="project-name">{{ item.name }}</div>
                      <div class="project-text">
                        {{ item.text }}
                      </div>
                    </div>
                  </div>
                  <div class="project-footer">
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                    <div class="project-row">
                      <div class="project-label">工程进度</div>
                      <div class="project-value">62%</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const navList = ref([
  {
    id: 1,
    name: "vue.js",
    text: "一款用于构建用户界面的 JavaScript 框架",
    image: "https://hao.panziye.com/hao/wp-content/uploads/2022/10/vue.png",
  },
  {
    id: 2,
    name: "webStorm",
    text: "前端开发工具",
    image:
      "https://hao.panziye.com/hao/wp-content/uploads/2022/10/webstorm.png",
  },
  {
    id: 3,
    name: "idea",
    text: "Java开发好用的开发工具",
    image: "https://hao.panziye.com/hao/wp-content/uploads/2022/10/idea.png",
  },
  {
    id: 4,
    name: "tinypng",
    text: "在线图片压缩网站",
    image: "https://hao.panziye.com/hao/wp-content/uploads/2022/10/tinypng.png",
  },
  {
    id: 5,
    name: "码云",
    text: "国产git代码仓库",
    image: "https://hao.panziye.com/hao/wp-content/uploads/2022/10/get.ico",
  },
  {
    id: 6,
    name: "软考官网",
    text: "中国计算机技术职业资格网",
    image: "https://hao.panziye.com/hao/wp-content/uploads/2022/10/get.ico",
  },
]);
//菜单列表
const menuList = ref([
  {
    id: 1,
    name: "分析页",
    icon: "ios-podium",
    color: "#19be6b",
  },
  {
    id: 2,
    name: "消息中心",
    icon: "md-notifications",
    color: "#5e2aec",
  },
  {
    id: 3,
    name: "个人中心",
    icon: "md-person",
    color: "#e216d1",
  },
  {
    id: 4,
    name: "系统设置",
    icon: "md-settings",
    color: "#1619e2",
  },
  {
    id: 5,
    name: "可视化",
    icon: "md-speedometer",
    color: "#9be216",
  },
  {
    id: 6,
    name: "日志",
    icon: "md-locate",
    color: "#e26816",
  },
]);
//待办列表
const handList = ref([
  {
    id: 1,
    name: "Echo 提出问题 Table 中使用 Poptip 遮挡问题",
    svg: "word",
    time: "2023-05-25 11:37:16",
  },
  {
    id: 2,
    name: "事项动态路由及权限控制",
    svg: "excel",
    time: "2023-05-25 11:37:16",
  },
  {
    id: 3,
    name: "解决路由错误404问题",
    svg: "excel",
    time: "2022-05-25 11:37:16",
  },
  {
    id: 4,
    name: "提交adminPlus初始版",
    svg: "word",
    time: "2023-04-21 11:37:16",
  },
  {
    id: 5,
    name: "解决菜单栏收缩图标显示问题",
    svg: "excel",
    time: "2023-02-25 11:37:16",
  },
]);
const tableColumns = ref([
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
]);
const tableData = ref([
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
]);
</script> 

<style scoped lang="less">
.page-user {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .user-left {
    display: flex;
    align-items: center;
  }
  .user-box {
    margin-left: 15px;
    .user-name {
      color: #17233d;
      font-size: 22px;
    }
    .user-weather {
      color: #808695;
      font-size: 16px;
      margin-top: 6px;
    }
  }
  .user-right {
    display: flex;
    align-items: center;
    .user-count {
      padding: 15px 20px;
      text-align: center;
      .user-count-name {
        color: #808695;
        font-size: 14px;
      }
      .user-count-num {
        color: #17233d;
        font-size: 20px;
        margin-top: 4px;
      }
    }
  }
}
.nav-box {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  .nav-item {
    display: flex;
    align-items: center;
    border: 1px solid #e8eaec;
    border-radius: 6px;
    padding: 20px 15px;
    margin-bottom: 15px;
    cursor: pointer;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .nav-content {
    padding-left: 15px;
    .nav-item-name {
      font-size: 20px;
      color: #17233d;
    }
    .nav-item-text {
      font-size: 14px;
      color: #515a6e;
    }
  }
}
.menu-box {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 231px;
  .menu-box-item {
    width: 33.3%;
    padding: 20px 15px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    .menu-box-name {
      font-size: 14px;
      color: #515a6e;
      margin-top: 6px;
    }
  }
}
.hand-box {
  height: auto;
  padding: 15px;
  .hand-box-row {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 1px solid #f1f1f1;
  }
  .hand-box-centent {
    flex: 1;
    padding: 0px 15px;
    .hand-name {
      color: #17233d;
      font-size: 16px;
      margin-top: 2px;
    }
    .hand-text {
      color: #808695;
      font-size: 14px;
    }
  }
}
.table-box {
  padding: 15px;
  height: 370px;
}
.project-title {
  color: #17233d;
  font-weight: 600;
  font-size: 16px;
}
.project-item {
  border: 1px solid red;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #e8eaec;
  border-radius: 6px;
  cursor: pointer;

  .project-flex {
    display: flex;
    .project-content {
      margin-left: 10px;
      .project-name {
        color: #17233d;
        font-size: 16px;
        font-weight: 600;
      }
      .project-text {
        color: #808695;
        font-size: 13px;
      }
    }
  }
  .project-footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .project-row {
    width: 48.5%;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background-color: #f8f8f9;
    border-radius: 4px;
    margin-top: 12px;
    .project-label {
      padding-right: 10px;
      color: #808695;
      font-size: 14px;
      border-right: 1px solid #dbdde0;
    }
    .project-value {
      padding-left: 10px;
      color: #17233d;
      font-size: 14px;
    }
  }
}
.card-title {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  .card-title-left {
    span {
      color: #515a6e;
      font-size: 15px;
      margin-left: 6px;
    }
  }
}
</style>
