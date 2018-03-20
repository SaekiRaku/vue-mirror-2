<template>
    <input type="text" id="input" v-bind:placeholder="placeholder" v-bind:class="['v-input']" @keyup="duang">
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

#input:hover,
#input:focus {
  border: 2px solid @color-main;
}
</style>

<script>
import utils from "utils";

export default {
    data() {
        return {
            vvalue: ""
        };
    },
    props: {
        name: {
            type: String
        },
        disable: {
            type: Boolean
        },
        active: {
            type: Boolean
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        }
    },
    mounted() {
        this.scope = this.name || this.$parent.name || "";
        if (this.value) {
            this.$data.vvalue = this.value;
            Vue.nextTick(() => {
                this.duang();
            });
        }
    },
    methods: {
        duang(evt) {
            this.$data.vvalue = evt.target.value;
            var eventData = {
                type: "string",
                name: this.scope,
                value: this.$data.vvalue
            };
            this.$emit("change", this.vvalue);
            utils.event.triggerEvent("group_" + this.scope, eventData);
        }
    }
};
</script>

