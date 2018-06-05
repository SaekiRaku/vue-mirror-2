<template>
<document>
    <h1>
        更新日志 / Update
    </h1>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.9</h1>
            <h2>2018-06-05</h2>
        </v-title>
        <ul>
            <li>修复 Radio、Checkbox 组件禁用样式失效问题</li>
            <li>增加全局钩子方法及文档</li>
            <li>为 Card 组件增加点击事件</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.8</h1>
            <h2>2018-05-14</h2>
        </v-title>
        <ul>
            <li>修复Dropdown变化没有提交到父Group组件的问题</li>
            <li>修复组件ID冲突问题</li>
            <li>修复Button组件的文档内容中的拼写错误，增加size属性</li>
            <li>修复Tab组件的Slide的定位错误</li>
            <li>修复Tag组件的Utils包引入问题</li>
            <li>修复Modal组件关闭后仍显示滚动条的问题</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.7</h1>
            <h2>2018-04-19</h2>
        </v-title>
        <ul>
            <li>为Input输入框组件增加type类型</li>
            <li>修改Dropdown下拉框组件默认值无效的问题</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.6</h1>
            <h2>2018-04-18</h2>
        </v-title>
        <ul>
            <li>增加Dropdown下拉框组件及文档</li>
            <li>Tag标签组件增加禁用样式</li>
            <li>Tag标签组件增加对Group组件的支持</li>
            <li>修改Vue引用方式，解决Vue未定义的问题</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.5</h1>
            <h2>2018-03-28</h2>
        </v-title>
        <ul>
            <li>增加Tab标签页组件及文档</li>
        </ul>
    </div>

    <div class="block">
        <v-title>
            <h1>Ver 0.0.4</h1>
            <h2>2018-03-23</h2>
        </v-title>
        <ul>
            <li>增加Avatar头像组件及文档</li>
            <li>增加Tag标签组件及文档</li>
        </ul>
    </div>

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
