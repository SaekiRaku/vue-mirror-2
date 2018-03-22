<template>
  <p class="v-text">
      <slot></slot>
  </p>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-text {
        line-height: 3*@grid;
        text-indent: 2*@size-1;
        text-align: justify;
    }
</style>
