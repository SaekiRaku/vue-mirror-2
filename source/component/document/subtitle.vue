<template>
    <span class="v-subtitle">
        <span class="v-subtitle-deco"></span>
        <slot>

        </slot>
    </span>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-subtitle {
        display: block;
        margin: 3*@grid 0px;
    }

    .v-subtitle-deco {
        vertical-align: middle;
        display: inline-block;
        width: 4px;
        height: 15px;
        margin-right: @grid;
        background: @color-main;
    }

    h1,h2,h3,h4,h5,h6 {
        display: inline;
        font-weight: normal;
        margin: 0px;
        font-size: @size-1;
    }
</style>