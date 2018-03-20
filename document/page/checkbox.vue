<template>
    <document>
        <h1>复选框 / v-checkbox</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-group name="group_checkbox" v-on:change="result">
            <v-checkbox value="A">复选框 A</v-checkbox>
            <v-checkbox value="B" active>复选框 B</v-checkbox>
            <v-checkbox value="C">复选框 C</v-checkbox>
            <v-checkbox value="D">复选框 D</v-checkbox>
        </v-group>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-group name="group_checkbox" v-on:change="result"&gt;
        &lt;v-checkbox value="A"&gt;复选框 A&lt;/v-checkbox&gt;
        &lt;v-checkbox value="B"&gt;复选框 B&lt;/v-checkbox&gt;
        &lt;v-checkbox value="C"&gt;复选框 C&lt;/v-checkbox&gt;
        &lt;v-checkbox value="D"&gt;复选框 D&lt;/v-checkbox&gt;
    &lt;/v-group&gt;
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
                    <th>备注</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>当前值</td>
                    <td>一般情况下，该组件需要配合 表单组/Form Group 组件使用，请看下方的示例</td>
                </tr>
            </table>
        </function>
<codeblock>
    &lt;v-group name="group_checkbox" v-on:change="result"&gt;
        &lt;v-checkbox value="A"&gt;复选框 A&lt;/v-checkbox&gt;
        &lt;v-checkbox value="B"&gt;复选框 B&lt;/v-checkbox&gt;
        &lt;v-checkbox value="C"&gt;复选框 C&lt;/v-checkbox&gt;
        &lt;v-checkbox value="D"&gt;复选框 D&lt;/v-checkbox&gt;
    &lt;/v-group&gt;

    {
        methods:{
            result(data){
                this.youth.toast(`当前选择：${data.group_checkbox.join(", ")}`);
            }
        }
    }
</codeblock>
    </document>
</template>

<style lang="less" scoped>
    .v-checkbox {
        margin: 16px;
    }
</style>


<script>
export default {
    methods:{
        result(data){
            this.youth.toast(`当前选择：${data.group_checkbox.join(", ")}`);
        }
    }
}
</script>
