<!--
  功能：分析页
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月30日 09:49:54
-->
<template>
  <div>
    <Row :gutter="10">
      <Col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="user-card">
          <Row :gutter="15">
            <!-- 用户信息-->
            <Col :xs="24" :sm="24" :md="6" :lg="6">
              <div class="user-num">
                <div class="user-num-name">累计会员数量（人）</div>
                <div class="user-num-count">
                  <Icon type="ios-people" />
                  <span>15,2565</span>
                </div>
              </div>
              <div class="goods-box">
                <div class="goods-item">
                  <div class="goods-num">3845</div>
                  <div class="goods-name">商品总数</div>
                </div>
                <div class="goods-item">
                  <div class="goods-num">1245</div>
                  <div class="goods-name">订单量</div>
                </div>
                <div class="goods-item">
                  <div class="goods-num">421</div>
                  <div class="goods-name">退货数</div>
                </div>
                <div class="goods-item">
                  <div class="goods-num">1245</div>
                  <div class="goods-name">好评数</div>
                </div>
              </div>
            </Col>
            <!-- 订单量 -->
            <Col :xs="24" :sm="24" :md="18" :lg="18">
              <div class="order-chart">
                <OrderBar></OrderBar>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <!-- 数据统计 -->
      <Col
        :xs="24"
        :sm="12"
        :md="4"
        :lg="4"
        v-for="item in countList"
        :key="item.id"
      >
        <div class="count-box">
          <div class="count-icon">
            <ColorIcon :size="50" :icon="item.icon" :color="item.color" />
          </div>
          <div class="count-content">
            <div class="count-name">{{ item.name }}</div>
            <div class="count-num">{{ item.num }}</div>
          </div>
        </div>
      </Col>
      <!-- 地图 -->
      <Col :xs="24" :sm="24" :md="18" :lg="18">
        <div class="map-box"></div>
      </Col>
    </Row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OrderBar from "./components/orderBar.vue";
//统计数据
const countList = ref([
  {
    id: 2,
    name: "订单量",
    num: 4512,
    unit: "个",
    icon: "ios-podium",
    color: "#19be6b",
  },
  {
    id: 3,
    name: "用户量",
    num: 15312,
    unit: "个",
    icon: "md-mail-open",
    color: "#ff7306",
  },
  {
    id: 4,
    name: "商品数",
    num: 26154,
    unit: "件",
    icon: "md-notifications",
    color: "#5e2aec",
  },
  {
    id: 5,
    name: "库存",
    num: 17452,
    unit: "件",
    icon: "md-person",
    color: "#e216d1",
  },
  {
    id: 7,
    name: "待付款",
    num: 6412,
    unit: "单",
    icon: "md-speedometer",
    color: "#9be216",
  },
  {
    id: 8,
    name: "快件",
    num: 8512,
    unit: "个",
    icon: "md-locate",
    color: "#e26816",
  },
]);
</script> 

<style scoped lang="less">
.user-card {
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  .user-num {
    padding: 15px;
    background-image: linear-gradient(to top, #2db7f5 0%, #2d8cf0 100%);
    border-radius: 6px;
  }
  .user-num-name {
    color: #e8eaec;
    font-size: 16px;
  }
  .user-num-count {
    color: #f8f8f9;
    font-size: 26px;
  }
  .goods-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods-item {
      width: 48%;
      padding: 15px;
      background: rgba(45, 140, 240, 0.06);
      margin-top: 15px;
      border-radius: 4px;
    }
    .goods-name {
      color: #515a6e;
      font-size: 14px;
    }
    .goods-num {
      color: #2d8cf0;
      font-size: 24px;
    }
  }
}
.order-chart {
  height: 296px;
}
.count-box {
  border-radius: 4px;
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .count-name {
    margin-left: 15px;
    color: #515a6e;
    font-size: 15px;
  }
  .count-num {
    margin-left: 15px;
    color: #17233d;
    font-size: 26px;
  }
}
.map-box {
  margin-top: 10px;
  border-radius: 4px;
  padding: 15px;
  background-color: #fff;
  height: 600px;
}
</style>
