<template>
    <document>
        <h1>输入框 / v-input</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-input></v-input>
        <v-input value="默认值"></v-input>
        <v-input placeholder="placeholder"></v-input>
        <v-input placeholder="placeholder" disable></v-input>
        <div style="margin-top:16px;">
            <span>双向绑定&nbsp;&nbsp;</span>
            <v-input v-model="value"></v-input>
            <span>&nbsp;&nbsp;{{value}}</span>
        </div>

        <v-textarea></v-textarea>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-input&gt;&lt;/v-input&gt;
    &lt;v-input placeholder="placeholder"&gt;&lt;/v-input&gt;
    &lt;v-input placeholder="placeholder" disable&gt;&lt;/v-input&gt;
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

    </document>
</template>

<style lang="less">

.v-button {
    margin: 8px;
}

.content {
    text-align: justify;
    width: 640px;
    padding: 48px;
}

</style>


<script>
export default {
    data(){
        return {
            value:""
        }
    },
    methods:{
        openToast(){
            this.youth.toast("这是一个普通样式的 Toast 通知");
        },
        openDangerToast(){
            this.youth.toast("这是一个 Danger 样式的 Toast 通知",true);
        }
    }
}
</script>
