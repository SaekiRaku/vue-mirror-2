<template>
<document>
    <h1>卡片 / v-card</h1>

    <h2>Example</h2>
    <h6>效果演示</h6>
    <v-card level="0" hover="true">
        <v-title>
            <h1>Card</h1>
            <h2>level 0</h2>
        </v-title>
    </v-card>

    <v-card level="1" hover="true">
        <v-title>
            <h1>Card</h1>
            <h2>level 1</h2>
        </v-title>
    </v-card>

    <v-card level="2" hover="true">
        <v-title>
            <h1>Card</h1>
            <h2>level 2</h2>
        </v-title>
    </v-card>

    <h2>Usage</h2>
    <h6>使用方法</h6>

<codeblock>
    &lt;v-card level="0" hover="true"&gt;
        &lt;v-title&gt;
            &lt;h1&gt;Card&lt;/h1&gt;
            &lt;h2&gt;level 0&lt;/h2&gt;
        &lt;/v-title&gt;
    &lt;/v-card&gt;

    &lt;v-card level="1" hover="true"&gt;
        &lt;v-title&gt;
            &lt;h1&gt;Card&lt;/h1&gt;
            &lt;h2&gt;level 1&lt;/h2&gt;
        &lt;/v-title&gt;
    &lt;/v-card&gt;

    &lt;v-card level="2" hover="true"&gt;
        &lt;v-title&gt;
            &lt;h1&gt;Card&lt;/h1&gt;
            &lt;h2&gt;level 2&lt;/h2&gt;
        &lt;/v-title&gt;
    &lt;/v-card&gt;
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
            <td>level</td>
            <td>
                阴影等级（0~2）
            </td>
            <td>
                Number
            </td>
            <td>
                0
            </td>
        </tr>
        <tr>
            <td>hover</td>
            <td>
                是否启用hover效果
            </td>
            <td>
                Boolean
            </td>
            <td>
                false
            </td>
        </tr>
    </table>

</document>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-card {
  margin-bottom: 24px;
  overflow: hidden;
  width: 200px;
  height: 110px;
}
</style>
