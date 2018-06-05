<template>
    <div class="v-page" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
import utils from "utils";

export default {
    props: {
        title: {
            // 页面标题
            type: String,
            required: true
        }
    },
    data() {
        return {
            show: false
        };
    },
    mounted() {
        if (!this.title) {
            return;
        }
        utils.event.registerEvent(`page_active_${this.$parent.name}`, val => {
            this.show = this.title == val;
        });
        this.$nextTick(() => {
            utils.event.triggerEvent(`page_add_${this.$parent.name}`, this.title);
        });
    }
};
</script>
