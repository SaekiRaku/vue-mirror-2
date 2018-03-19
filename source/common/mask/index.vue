<template>
  <div v-bind:class="['v-mask',show?'show':'noevent']">
  </div>
</template>

<style lang="less" scoped>
  @import "~style/basic.less";

  .v-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    opacity: 0;
    background: @color-white;
    z-index: @top - 2;

    .transition(all,400ms,ease-out);
  }

  .show {
    opacity: 0.9;
  }

  .noevent {
    pointer-events: none;
  }
</style>

<script>
export default {
  props:{
    show:{
      type:Boolean,
      default:false
    }
  }
}
</script>
