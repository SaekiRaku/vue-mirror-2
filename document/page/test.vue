<template>
<div>
    <v-button @click="toggle">{{show?"隐藏消息":"显示消息"}}</v-button>
    <v-message v-bind:show="show">普通消息</v-message>
    <v-message v-bind:show="show" canclose="true">带关闭的普通消息</v-message>
    <v-message v-bind:show="show" type="danger">危险消息</v-message>
</div>
</template>

<style lang="less">
.v-message {
    margin: 8px;
}
</style>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    methods:{
        toggle(){
            this.$data.show = !this.$data.show;
        }
    }
}
</script>
