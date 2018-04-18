<template>
    <input 
        type="text"
        id="input"
        v-bind:placeholder="placeholder"
        v-bind:class="['v-input',disable?'disable':'']"
        v-bind:disabled='disable'
        v-bind:value="value"
        v-on:input="duang($event.target.value)"
    />
</template>

<style lang="less" scoped>
@import "~style/basic.less";

#input {
  color: @color-black;
  font-size: 16px;
  border: none;
  border-radius: @input-radius;
  padding: @grid;
  outline: none;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px @color-gray;  
  .transition(all,1s);
}

.disable {
    background: @color-gray;
    box-shadow: none !important;    
}

#input:hover,
#input:focus {
  box-shadow: 0 0 0 2px @color-main;
}
</style>

<script>
import utils from "utils";

export default {
    data(){
        return {
            vvalue:''
        }
    },
    props: {
        name: {
            type: String
        },
        disable: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        value: {
            type: String,
            default:""
        }
    },
    mounted() {
        this.scope = this.name || this.$parent.name || "";
        if (this.value) {
            this.$data.vvalue = this.value;
            this.$nextTick(() => {
                this.duang();
            });
        }
    },
    methods: {
        duang(val) {
            this.vvalue = val;
            var eventData = {
                type: "string",
                name: this.scope,
                value: this.vvalue
            };
            this.$emit("input", this.vvalue);
            utils.event.triggerEvent("group_" + this.scope, eventData);
        }
    }
};
</script>

