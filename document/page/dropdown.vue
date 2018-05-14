<template>
    <document>
        <h1>下拉框 / v-dropdown</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-group name="group_dropdown" @change="handle">
            <v-dropdown :value="fuck">
                <v-item>A</v-item>
                <v-item>B</v-item>
                <v-item>C</v-item>
                <v-item>D</v-item>
                <v-item>E</v-item>
                <v-item>F</v-item>
            </v-dropdown>
        </v-group>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-dropdown&gt;
        &lt;v-item&gt;A&lt;/v-item&gt;
        &lt;v-item&gt;B&lt;/v-item&gt;
        &lt;v-item&gt;C&lt;/v-item&gt;
        &lt;v-item&gt;D&lt;/v-item&gt;
        &lt;v-item&gt;E&lt;/v-item&gt;
        &lt;v-item&gt;F&lt;/v-item&gt;
    &lt;/v-dropdown&gt;
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
                <td>value</td>
                <td>
                    默认值
                </td>
                <td>
                    String
                </td>
                <td>
                    "请选择..."
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
    &lt;v-group name="group_dropdown" v-on:change="result"&gt;
        &lt;v-dropdown&gt;
            &lt;v-item&gt;A&lt;/v-item&gt;
            &lt;v-item&gt;B&lt;/v-item&gt;
            &lt;v-item&gt;C&lt;/v-item&gt;
            &lt;v-item&gt;D&lt;/v-item&gt;
            &lt;v-item&gt;E&lt;/v-item&gt;
            &lt;v-item&gt;F&lt;/v-item&gt;
        &lt;/v-dropdown&gt;
    &lt;/v-group&gt;

    {
        methods:{
            result(data){
                this.youth.toast(`当前选择：${data.group_radio.value}`);
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
    data(){
        return {
            fuck:"123"
        }
    },
    mounted(){
        setTimeout(()=>{
            this.fuck = "abc"
        },1000)
    },
    methods:{
        handle(data){
            console.log(data);
        }
    }
}
</script>
