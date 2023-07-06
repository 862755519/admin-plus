<!--
  功能：主控台
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月30日 09:50:12
-->
<template>
  <div class="page-container">
    <Row :gutter="10">
      <!-- 访问量 -->
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <div class="page-card">
          <div class="page-card-title">
            <div>访问量</div>
            <Tag color="green">日</Tag>
          </div>
          <div class="page-card-content">
            <div class="num-box">
              2,6421
              <span>次</span>
            </div>
            <div class="num-ratio">
              <span
                >日同比 12.5% <Icon type="md-arrow-dropup" color="#19be6b"
              /></span>
              <span style="margin-left: 10px"
                >周同比 4.6% <Icon type="md-arrow-dropdown" color="#ed4014"
              /></span>
            </div>
          </div>
          <div class="page-card-footer">
            <div>总访问量</div>
            <div>160.8万</div>
          </div>
        </div>
      </Col>
      <!-- 销售额 -->
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <div class="page-card">
          <div class="page-card-title">
            <div>销售额</div>
            <Tag color="blue">周</Tag>
          </div>
          <div class="page-card-content">
            <div class="num-box">￥14,2656</div>
            <div class="num-ratio">
              <Progress
                :percent="45"
                :stroke-width="12"
                hide-info
                status="active"
              />
            </div>
          </div>
          <div class="page-card-footer">
            <div>总销售额</div>
            <div>898.26万</div>
          </div>
        </div>
      </Col>
      <!-- 订单量 -->
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <div class="page-card">
          <div class="page-card-title">
            <div>订单量</div>
            <Tag color="red">月</Tag>
          </div>
          <div class="page-card-content">
            <div class="num-box">
              8656
              <span>个</span>
            </div>
            <div class="num-img">
              <img
                src="@/assets/images/order.png"
                alt=""
                srcset=""
                style="width: 100%; height: 24px"
              />
            </div>
          </div>
          <div class="page-card-footer">
            <div>总销售额</div>
            <div>898.26万</div>
          </div>
        </div>
      </Col>
      <!-- 用户量 -->
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <div class="page-card">
          <div class="page-card-title">
            <div>用户量</div>
            <Tag color="purple">年</Tag>
          </div>
          <div class="page-card-content">
            <div class="num-box">
              +1257
              <span>人</span>
            </div>
            <div class="num-img">
              <AvatarList
                :list="userList"
                size="small"
                :max="5"
                :excess-style="excessStyle"
              />
            </div>
          </div>
          <div class="page-card-footer">
            <div>总用户量</div>
            <div>56.34万</div>
          </div>
        </div>
      </Col>
      <!-- 菜单列表 -->
      <Col
        :xs="12"
        :sm="12"
        :md="3"
        :lg="3"
        v-for="item in menuList"
        :key="item"
      >
        <div class="page-card">
          <div class="page-card-menu">
            <Icon :type="item.icon" class="menu-icon" :color="item.color" />
            <div class="menu-title">{{ item.name }}</div>
          </div>
        </div>
      </Col>
      <!-- 访问量柱状图 -->
      <Col :xs="24" :sm="24" :md="18" :lg="18">
        <div class="page-card">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="ios-stats" color="#1e71ff" />
              <span>访问量统计</span>
            </div>
            <div class="card-title-right">
              <DatePicker
                type="date"
                placeholder="选择日期"
                style="width: 216px"
              />
            </div>
          </div>
          <div class="card-chart">
            <div id="visitChart" class="visit-chart"></div>
          </div>
        </div>
      </Col>
      <!-- 访问排行榜 -->
      <Col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="page-card">
          <div class="card-title">
            <div class="card-title-left">
              <ColorIcon :size="30" icon="ios-people" color="#1e71ff" />
              <span>访问量排行</span>
            </div>
          </div>
          <div class="card-chart">
            <div class="rank-box">
              <div class="rank-row" v-for="item in 7" :key="item">
                <div :class="[item<4 ? 'rank-index'+ item : 'rank-index']">{{ item }}</div>
                <div class="rank-name">微信用户{{ item }}</div>
                <div class="rank-num">{{ parseInt(10000 / item) }}次</div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";
//头像组样式
const excessStyle = reactive({
  color: "#f56a00",
  backgroundColor: "#fde3cf",
});
//头像列表
const userList = ref([
  {
    src: "https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar",
    tip: "史蒂夫·乔布斯",
  },
  {
    src: "https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar",
    tip: "斯蒂夫·沃兹尼亚克",
  },
  {
    src: "https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar",
    tip: "乔纳森·伊夫",
  },
  {
    src: "https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar",
    tip: "蒂姆·库克",
  },
  {
    src: "https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar",
    tip: "乔纳森·伊夫",
  },
  {
    src: "https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar",
    tip: "比尔·费尔南德斯",
  },
]);
//菜单列表
const menuList = ref([
  {
    id: 1,
    name: "主控台",
    icon: "md-desktop",
    color: "#2a95ec",
  },
  {
    id: 2,
    name: "分析页",
    icon: "ios-podium",
    color: "#19be6b",
  },
  {
    id: 3,
    name: "工作台",
    icon: "md-mail-open",
    color: "#ff7306",
  },
  {
    id: 4,
    name: "消息中心",
    icon: "md-notifications",
    color: "#5e2aec",
  },
  {
    id: 5,
    name: "个人中心",
    icon: "md-person",
    color: "#e216d1",
  },
  {
    id: 6,
    name: "系统设置",
    icon: "md-settings",
    color: "#1619e2",
  },
  {
    id: 7,
    name: "可视化",
    icon: "md-speedometer",
    color: "#9be216",
  },
  {
    id: 8,
    name: "日志",
    icon: "md-locate",
    color: "#e26816",
  },
]);

//初始化访问量图表
const initVisitChart = () => {
  var yData = [
    1709, 2999, 1799, 3299, 4299, 3299, 2999, 3999, 2999, 1709, 2999, 1709,
  ];
  var xData = (function () {
    var data = [];
    for (var i = 1; i < 13; i++) {
      data.push(i + "月");
    }
    return data;
  })();
  var myChart = echarts.init(document.getElementById("visitChart"));
  // 绘制图表
  myChart.setOption({
    backgroundColor: "#ffffff",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "10%",
      right: "0%",
      left: "4%",
      bottom: "10%",
    },
    xAxis: [
      {
        type: "category",
        data: xData,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "#dcdee2",
          },
        },
        lineStyle: {
          color: "#f9f9f9",
        },
        axisLabel: {
          margin: 10,
          color: "#808695",
          textStyle: {
            fontSize: 14,
          },
        },
      },
    ],
    yAxis: [
      {
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#f1f1f1",
          },
        },
        axisLine: {
          //坐标轴轴线相关设置。数学上的y轴
          show: true,
          lineStyle: {
            color: "#f1f1f1",
          },
        },
        axisLabel: {
          formatter: "{value}",
          color: "#808695",
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: yData,
        barWidth: "35%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#2db7f5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#1e71ff", // 100% 处的颜色
                },
              ],
              false
            ),
          },
        },
      },
    ],
  });
  window.onresize = function () {
    myChart.resize();
  };
};
//初始化图表
onMounted(() => {
  initVisitChart();
});
</script> 

<style scoped lang="less">
.page-container {
  height: auto;
  .page-card {
    height: auto;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 10px;
    &-title {
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      color: #515a6e;
      font-size: 15px;
    }
    &-content {
      padding: 15px;
      height: 100px;
      .num-box {
        color: #515a6e;
        font-size: 26px;
        span {
          font-size: 15px;
        }
      }
      .num-ratio {
        color: #515a6e;
        font-size: 15px;
        margin-top: 6px;
      }
      .num-img {
        margin: 0px;
      }
    }
    &-footer {
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f1f1f1;
      color: #515a6e;
      font-size: 15px;
    }
    &-menu {
      padding: 20px 15px;
      text-align: center;
      color: #515a6e;
      font-size: 14px;
      cursor: pointer;
      .menu-icon {
        font-size: 26px;
      }
      .menu-title {
        margin-top: 6px;
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
  .card-chart {
    padding: 15px;
  }
  .visit-chart {
    height: 400px;
  }
  .rank-box {
    height: 400px;
    overflow: auto;
    .rank-row {
      padding: 10px 0px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      .rank-index1 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(237, 64, 20, 0.1);
        color: #ed4014;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
      }
      .rank-index2 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(25, 190, 107,0.1);
        color: #19be6b;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
      }
      .rank-index3 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(45, 140, 240, 0.1);
        color: #1e71ff;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
      }
      .rank-index {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #f8f8f9;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
      }
      .rank-name {
        color: #17233d;
        font-size: 15px;
        font-weight: 600;
        padding: 0px 10px;
        flex: 1;
      }
      .rank-name {
        color: #515a6e;
        font-size: 14px;
      }
    }
  }
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}
</style>
