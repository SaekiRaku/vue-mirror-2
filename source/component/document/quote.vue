<template>
  <div class="v-quote">
      <slot></slot>
  </div>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-quote {
        margin: 2*@grid;
        padding: 2*@grid;
        border: 1px dashed @color-gray;
        color: @color-gray-dark;
        background: @color-gray-light;
        border-radius: @quote-radius;
    }
</style>
