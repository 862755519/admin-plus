<!--
  功能：支持布尔值单选
  作者：Maoxiangdong
  邮箱：862755519@qq.com
  时间：2023年08月17日 09:45:16
-->
<template>
    <div class="boolean-radio">
        <Row :gutter="10">
            <Col span="12" v-for="(item, index) in booleanData" :key="index">
            <div :class="['boolean-radio-item', selectValue == item.value ? 'boolean-radio-item-active' : '']"
                @click="selectValueChange(item)">
                <div class="boolean-dot-active" v-if="selectValue == item.value">
                    <div class="dot-box"></div>
                </div>
                <div class="boolean-dot" v-else></div>
                {{ item.label }}
            </div>
            </Col>
        </Row>
    </div>
</template>
  
<script setup>
import { ref, watch } from "vue";
const props = defineProps({
    // 数据类型
    modelList: {
        type: Array,
        default: [
            {
                value: true,
                label: "是"
            },
            {
                value: false,
                label: "否"
            }
        ]
    },
    // 绑定的值
    modelValue: {
        type: Boolean,
        default: true,
    }
});
const booleanData = ref(props.modelList)
// 选择的数据
const selectValue = ref(props.modelValue);
// emit 事件
const emits = defineEmits(["update:modelValue"]);
// 选择
const selectValueChange = (event) => {
    selectValue.value = event.value;
    emits("update:modelValue", selectValue.value);
};
</script> 
  
<style scoped lang="less">
.boolean-radio {
    height: auto;

    .boolean-radio-item {
        text-align: left;
        height: 32px;
        line-height: 31px;
        // background-color: #f8f8f9;
        border: 1px solid #dcdee2;
        color: #515a6e;
        border-radius: 4px;
        padding: 0px 10px;
        margin-bottom: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        display: flex;
        align-items: center;

        .boolean-dot {
            border: 1px solid #dcdee2;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 6px;
        }

        .boolean-dot-active {
            border: 1px solid #2d8cf0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 6px;
            display: flex;
            align-items: center;
            justify-content: center;

            .dot-box {
                background-color: #2d8cf0;
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }
        }
    }

    .boolean-radio-item-active {
        // color: #2d8cf0;
        border: 1px solid #2d8cf0;
        // background-color: rgba(45, 140, 240, 0.04)
    }
}
</style>
  