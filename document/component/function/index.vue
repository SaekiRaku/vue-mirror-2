<template>
    <div class="function">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .function {
        padding: @grid 2*@grid;
        border: 1px solid @color-gray;
        margin-bottom: 2*@grid;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: normal;
    }

    h1 {
        color: @color-main;
        margin: 0px;
        padding: 2*@grid 0px;
        border-bottom: 1px solid @color-gray;
    }

    table {
        width: 100%;
        text-align: left;

        th {
            background: @color-gray;
            padding: @grid;
            font-weight: normal;
        }

        tr:nth-child(odd) {
            background: @color-gray-light;
        }

        td {
            padding:@grid 2*@grid;
        }
    }
</style>