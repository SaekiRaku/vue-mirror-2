<template>
  <img v-bind:class="['v-avatar',size,shape]" v-bind:src="src" />
</template>

<style lang="less" scoped>
  @import "~style/basic.less";

  .small {
    width: 32px;
    height: 32px;
  }

  .normal {
    width: 48px;
    height: 48px;
  }

  .large {
    width: 64px;
    height: 64px;
  }

  .circle {
    border-radius: 100%;
  }

  .rectangle {
    border-radius: @avatar-radius;
  }
</style>

<script>
export default {
  props: {
    src: {
      type: String
    },
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "circle"
    }
  }
}
</script>
