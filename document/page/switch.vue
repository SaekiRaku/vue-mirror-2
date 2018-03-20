<template>
    <document>
        <h1>开关 / v-switch</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-switch></v-switch>
        <v-switch disable></v-switch>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-switch&gt;&lt;/v-switch&gt;
    &lt;v-switch disable&gt;&lt;/v-switch&gt;
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
                <td>name</td>
                <td>
                    域名、标识名
                </td>
                <td>
                    String
                </td>
                <td>
                    -
                </td>
            </tr>
            <tr>
                <td>active</td>
                <td>
                    是否选中（可用于赋值初始状态、或通过状态驱动）
                </td>
                <td>
                    Boolean
                </td>
                <td>
                    false
                </td>
            </tr>
            <tr>
                <td>value</td>
                <td>
                    值
                </td>
                <td>
                    Any
                </td>
                <td>
                    -
                </td>
            </tr>
            <tr>
                <td>disable</td>
                <td>
                    是否禁用组件
                </td>
                <td>
                    true | false
                </td>
                <td>
                    false
                </td>
            </tr>
        </table>

        <h2>Events</h2>
        <h6>事件</h6>

        <function>
            <h1>change</h1>
            <p>改变事件</p>
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
<codeblock>
    &lt;v-switch v-on:change="callback"&gt;CLICK&lt;/v-switch&gt;

    {
        methods:{
            callback:function(){
                // TODO...
            }
        }
    }
</codeblock>
    </document>
</template>

<script>
export default {
  
}
</script>
