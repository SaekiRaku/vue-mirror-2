<template>
<document>
    <h1>
        更新日志 / Update
    </h1>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.3</h1>
            <h2>2018-03-22</h2>
        </v-title>
        <ul>
            <li>增加文档样式相关组件及文档（Title、Quote、Divider）</li>
            <li>增加Card组件及文档</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.2</h1>
            <h2>2018-03-21</h2>
        </v-title>
        <ul>
            <li>增加Message组件及文档</li>
            <li>增加更新日志页面</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.1</h1>
            <h2>2018-03-20</h2>
        </v-title>
        <ul>
            <li>完成Button、Ripple、Checkbox、Group、Input、Modal、Radio、Switch、Mask、Toast组件。</li>
            <li>修改radio、checkbox、switch、input等通信交互bug，完成button、switch、radio、checkobx、group、modal组件的文档。</li>
            <li>修正checkbox、radio组件的兼容问题；完善toast、input组件的文档；增加input组件的双向绑定。</li>
            <li>完成所有已完成的组件的文档。</li>
        </ul>
    </div>
</document>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .block {
        margin: 7*@grid 0px;
    }

    li {
        line-height: 4*@grid;
    }
</style>
