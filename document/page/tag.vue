<template>
    <document>
        <h1>标签 / v-tag</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-tag>标签 1</v-tag>
        <v-tag disable>标签 2（禁用）</v-tag>
        <v-tag :active="true">标签 3（默认选中）</v-tag>
        <v-tag>标签 4</v-tag>
        <v-tag>标签 5</v-tag>
        <v-tag size="small">标签 6</v-tag>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-tag&gt;标签 1&lt;/v-tag&gt;
    &lt;v-tag&gt;标签 2&lt;/v-tag&gt;
    &lt;v-tag :active="true"&gt;标签 3（默认选中）&lt;/v-tag&gt;
    &lt;v-tag&gt;标签 4&lt;/v-tag&gt;
</codeblock>

        <h2>Props</h2>
        <h6>组件属性</h6>

        <table>
            <tr>
                <th>属性名</th>
                <th>释义</th>
                <th>可用值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>active</td>
                <td>
                    是否选中
                </td>
                <td>
                    Boolean
                </td>
                <td>false</td>
            </tr>
            <tr>
                <td>size</td>
                <td>
                    尺寸
                </td>
                <td>
                    normal | small
                </td>
                <td>normal</td>
            </tr>
        </table>

        <h2>Events</h2>
        <h6>事件</h6>

        <function>
            <h1>change</h1>
            <p>选中改变事件</p>
            <table>
                <tr>
                    <th>回调方法参数名</th>
                    <th>释义</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>当前值</td>
                </tr>
            </table>
        </function>

    </document>
</template>

<style lang="less" scoped>
.v-tag {
    margin: 8px;
}
</style>
