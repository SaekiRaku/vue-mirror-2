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
    background: rgba(255, 255, 255, 0);
    z-index: @top - 2;
    
    .transition(all,400ms,ease-out);
  }

  .show {
    background: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
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
