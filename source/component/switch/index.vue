<template>
    <div v-bind:class="['v-switch',vactive?'active':'deactive',disable?'disable':'']" @click='duang'>
        <div class="v-switch-block"></div>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-switch {
    display: inline-block;
    width: 5 * @grid;
    height: 3 * @grid;
    border-radius: 3 * @grid;
    cursor: pointer;
    box-shadow: inset rgba(33, 33, 33, 0.07) 0px 1px 2px;

    .noselect();
    .transition(all,300ms,ease-in-out);
}

.v-switch-block {
    background: @color-white;
    width: 3 * @grid;
    height: 3 * @grid;
    border-radius: 3 * @grid;
    box-shadow: @shadow-low;

    .transition(all,300ms,@ease-strong);
}

.deactive {
    background: @color-gray;
}

.active {
    background: @color-main;

    .v-switch-block {
        margin-left: 2 * @grid;
    }
}

.disable {
    background: @color-gray-dark;
    pointer-events: none;

    .v-switch-block {
        background: @color-gray;
        box-shadow: none;
    }
}
</style>

<script>
import mixin from "common/mixin.js";
import utils from "utils";

export default {
    mixins: [mixin],
    data() {
        return {
            scope: "",
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
            type: Boolean
        }
    },
    watch: {
        active(val) {
            this.vactive = !val;
            this.duang();
        }
    },
    mounted() {
        this.scope = this.name || this.$parent.name || "";
        if (this.active) {
            this.$nextTick(() => {
                this.duang();
            });
        }
    },
    methods: {
        duang() {
            this.vactive = !this.vactive;
            var eventData = {
                type: "string",
                name: this.scope,
                value: this.vactive
            };
            this.$emit("change", this.vactive);
            utils.event.triggerEvent("group_" + this.scope, eventData);
        }
    }
};
</script>
