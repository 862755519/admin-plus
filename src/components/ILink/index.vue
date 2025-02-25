<!-- ILink文字链接组件 -->
<template>
  <a
    :class="[
      'i-link',
      type ? `i-link-${type}` : '',
      disabled && 'is-disabled',
      size ? `i-link-${size}` : '',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon v-if="icon" :type="icon" />
    <slot />
  </a>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  underline: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  size: String,
  href: String,
  icon: String,
});
</script>
  <style lang="less" scoped>
// 定义颜色集合
@colors: {
  default: #515a6e;
  primary: #165DFF;
  success: #19be6b;
  warning: #ff9900;
  error: #ed4014;
  info: #2db7f5;
};

// hover滑过的样式混合
.hover-mixins(@color) {
  &:not(.is-disabled):hover {
    color: lighten(@color, 13%);
  }
}
// active点击的样式混合
.active-mixins(@color) {
  &:not(.is-disabled):active {
    color: darken(@color, 8%);
  }
}
// hover滑过有下划线的样式混合
.hover-after-mixins(@color) {
  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid @color;
  }
}

// 链接文字
.i-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  // 图标
  .ivu-icon {
    vertical-align: middle;
  }

  // 禁用状态
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // 文字大小
  &-small {
    font-size: 12px;
  }
  &-large {
    font-size: 16px;
  }

  // 各种type
  &-default {
    color: @colors[default];
    .hover-mixins(@colors[primary]);
    .active-mixins(@colors[primary]);
    &.is-underline {
      .hover-after-mixins(@colors[primary]);
    }
  }
  &-primary {
    color: @colors[primary];
    .hover-mixins(@colors[primary]);
    .active-mixins(@colors[primary]);
    &.is-underline {
      .hover-after-mixins(@colors[primary]);
    }
  }
  &-success {
    color: @colors[success];
    .hover-mixins(@colors[success]);
    .active-mixins(@colors[success]);
    &.is-underline {
      .hover-after-mixins(@colors[success]);
    }
  }
  &-warning {
    color: @colors[warning];
    .hover-mixins(@colors[warning]);
    .active-mixins(@colors[warning]);
    &.is-underline {
      .hover-after-mixins(@colors[warning]);
    }
  }
  &-error {
    color: @colors[error];
    .hover-mixins(@colors[error]);
    .active-mixins(@colors[error]);
    &.is-underline {
      .hover-after-mixins(@colors[error]);
    }
  }
  &-info {
    color: @colors[info];
    .hover-mixins(@colors[info]);
    .active-mixins(@colors[info]);
    &.is-underline {
      .hover-after-mixins(@colors[info]);
    }
  }
}
</style>
  