<template>
    <document>
        <h1>全局钩子 / Hook</h1>

        <p>全局钩子是一个用于监听每一个组件点击事件的方法，可用于记录用户操作步骤与流程，在发现bug时进行回滚。</p>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-button hook-name="button" hook-desc="Test Hook" type="primary">Click Me</v-button>
        <div style="font-size:12px; color:#9E9E9E;">请在开发者工具里查看控制台输出</div>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    Vue.youth.registerGlobalEvent(function(data){
        console.log(JSON.stringify(data));
    })
</codeblock>

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
    mounted(){
        this.youth.registerGlobalEvent(function(data){
            console.log(data);
        })
    }
}
</script>
