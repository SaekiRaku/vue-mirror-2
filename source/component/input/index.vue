<template>
    <input type="text" id="input" v-bind:placeholder="placeholder" v-bind:class="['v-input']" @keyup="handleChange">
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    #input {
        color: @color-black;
        font-size: 16px;
        border: 1px solid @color-gray;
        border-radius: @input-radius;
        padding: @grid;
        outline: none;
        .transition();
    }

    #input:hover, #input:focus {
        border: 2px solid @color-main;
    }
</style>

<script>
export default {
    props:{
        placeholder:{
            type:String
        }
    },
    methods:{
        handleChange(evt){
            this.$emit("change",evt.target.value);
        }
    }
}
</script>

