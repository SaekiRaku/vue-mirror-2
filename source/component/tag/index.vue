<template>
    <div v-bind:class="['v-tag',vactive?'active':'deactive',disable?'disable':'']" v-on:click="duang">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-tag {
    .noselect();
    display: inline-block;
    padding: @grid 2*@grid;
    border-radius: 4*@grid;
    cursor: pointer;
    .transition();
}

.deactive {
    border: 1px solid @color-gray;
}

.deactive:hover {
    border: 1px solid @color-main;
    color: @color-main;
}

.active {
    border: 1px solid @color-main;
    color: @color-white;
    background: @color-main;
}

.active:hover {
    background: @color-main-light;
}

.disable {
    pointer-events: none;
    background: @color-gray;
    color: @color-gray-dark;
}
</style>

<script>
import utils from "utils";

export default {
    data() {
        return {
            vactive: false
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
            type: Boolean,
            default: false
        }
    },
    watch: {
        active(val) {
            this.$data.vactive = !val;
            this.duang();
        }
    },
    mounted() {
        this.scope = this.name || this.$parent.name || "";
        if (this.active) {
            this.$data.vactive = !this.active;
            this.$nextTick(() => {
                this.duang();
            });
        }
    },
    methods: {
        duang() {
            this.$data.vactive = !this.$data.vactive;
            var eventData = {
                type: "array",
                name: this.scope,
                checked: this.$data.vactive
            };
            this.$emit("change", eventData);
            utils.event.triggerEvent("group_" + this.scope, eventData);
        }
    }
};
</script>
