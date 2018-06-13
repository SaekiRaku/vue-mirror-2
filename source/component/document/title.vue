<template>
    <span class="v-title">
        <slot>

        </slot>
    </span>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-title {
        display: block;
        border-left: 2px solid @color-main;
        padding-left: 2*@grid;
        margin: 4*@grid 0px;
    }

    h1 {
        font-size: @size-2;
        color: @color-main;
        margin: 0px;
        font-weight: normal;
    }

    h2 {
        font-weight: normal;
        margin: 0px;
        font-size: @size-0;
        color: @color-gray-dark;
    }
</style>