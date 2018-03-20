<template>
    <document>
        <h1>模态窗 / v-modal</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-button @click="openToast" type="primary">普通Toast通知</v-button>
        <v-button @click="openDangerToast" type="danger">危险Toast通知</v-button>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    export default {
        methods:{
            openToast(){
                this.youth.toast("这是一个普通样式的 Toast 通知");
            },
            openDangerToast(){
                this.youth.toast("这是一个 Danger 样式的 Toast 通知",true);
            }
        }
    }
</codeblock>
        <h2>Functions</h2>
        <h6>函数</h6>

        <function>
            <h1>Vue.youth.toast</h1>
            <p>打开模态窗</p>
            <table>
                <tr>
                    <th>参数名</th>
                    <th>释义</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>content</td>
                    <td>通知内容</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>danger</td>
                    <td>是否为危险内容</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>timeout</td>
                    <td>显示时间</td>
                    <td>Number</td>
                    <td>根据字数自动延迟相应时间</td>
                </tr>
            </table>
        </function>

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
