<template>
    <document>
        <h1>单选框 / v-radio</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-group name="group_radio" v-on:change="result">
            <v-radio value="A">单选框 A</v-radio>
            <v-radio value="B">单选框 B</v-radio>
            <v-radio value="C">单选框 C</v-radio>
            <v-radio value="D">单选框 D</v-radio>
        </v-group>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-group name="group_radio" v-on:change="result"&gt;
        &lt;v-radio value="A"&gt;单选框 A&lt;/v-radio&gt;
        &lt;v-radio value="B"&gt;单选框 B&lt;/v-radio&gt;
        &lt;v-radio value="C"&gt;单选框 C&lt;/v-radio&gt;
        &lt;v-radio value="D"&gt;单选框 D&lt;/v-radio&gt;
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
    &lt;v-group name="group_radio" v-on:change="result"&gt;
        &lt;v-radio value="A"&gt;单选框 A&lt;/v-radio&gt;
        &lt;v-radio value="B"&gt;单选框 B&lt;/v-radio&gt;
        &lt;v-radio value="C"&gt;单选框 C&lt;/v-radio&gt;
        &lt;v-radio value="D"&gt;单选框 D&lt;/v-radio&gt;
    &lt;/v-group&gt;

    {
        methods:{
            result(data){
                this.youth.toast(`当前选择：${data.group_radio}`);
            }
        }
    }
</codeblock>
    </document>
</template>

<style lang="less" scoped>
    .v-radio {
        margin: 16px;
    }
</style>


<script>
export default {
    methods:{
        result(data){
            this.youth.toast(`当前选择：${data.group_radio}`);
        }
    }
}
</script>
