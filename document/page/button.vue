<template>
    <document>
        <h1>按钮 / v-button</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-button type="link">
            Link Button
        </v-button>

        <v-button type="ghost">
            Ghost Button
        </v-button>

        <v-button type="default">
            Default Button
        </v-button>

        <v-button type="primary">
            Primary Button
        </v-button>

        <v-button type="danger">
            Danger Button
        </v-button>

        <v-button disable>
            Disable Button
        </v-button>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-button type="link"&gt;
        Link Button
    &lt;/v-button&gt;

    &lt;v-button disable&gt;
        Disable Button
    &lt;/v-button&gt;
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
                <td>type</td>
                <td>
                    按钮类型
                </td>
                <td>
                    normal | primary
                </td>
                <td>normal</td>
            </tr>
            <tr>
                <td>shape</td>
                <td>
                    按钮形状
                </td>
                <td>
                    rectangle | circle
                </td>
                <td>
                    rectangle
                </td>
            </tr>
            <tr>
                <td>size</td>
                <td>
                    按钮大小
                </td>
                <td>
                    small | large
                </td>
                <td>
                    small
                </td>
            </tr>
            <tr>
                <td>disable</td>
                <td>
                    是否禁用按钮
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
            <h1>click</h1>
            <p>点击事件</p>
        </function>
<codeblock>
    &lt;v-button v-on:click="callback"&gt;CLICK&lt;/v-button&gt;

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
