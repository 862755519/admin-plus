<!--
  功能：功能描述
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年05月31日 14:18:35
-->
<template>
  <div>
    <div class="chart-title">订单量</div>
    <div id="orderChart" class="order-chart"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
//初始化访问量图表
const initOrderChart = () => {
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
  var myChart = echarts.init(document.getElementById("orderChart"));
  var chartOptions = {
    tooltip: {},
    backgroundColor: "#ffffff",
    animation: false,
    grid: {
      top: "5%",
      left: "70",
      bottom: "10%",
      rigth: "5%",
    },
    xAxis: {
      data: xData,
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#dcdee2",
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        textStyle: {
          color: "#808695", //X轴文字颜色
        },
      },
    },
    yAxis: [
      {
        type: "value",
        min: 0,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#f1f1f1",
            width: 1,
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#dcdee2",
          },
        },
        axisLabel: {
          show: true,
          margin: 14,
          fontSize: 14,
          textStyle: {
            color: "#808695", //X轴文字颜色
          },
        },
      },
    ],
    series: [
      {
        name: "订单量",
        type: "bar",
        barWidth: "40%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#2db7f5",
              },
              {
                offset: 1,
                color: "#1e71ff",
              },
            ]),
          },
        },
        data: yData,
        z: 10,
        zlevel: 0
      }
    
    ],
  };
  // 绘制图表
  myChart.setOption(chartOptions);
  window.onresize = function () {
    myChart.resize();
  };
};
//初始化图表
onMounted(() => {
  initOrderChart();
});
</script> 

<style scoped lang="less">
.chart-title{
    color: #17233d;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
}
.order-chart {
  width: 100%;
  height: 265px;
  margin-top: 6px;
}
</style>
