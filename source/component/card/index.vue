<template>
  <div v-bind:class="['v-card','level_'+level,hover?'hover_'+level:'']" @click="handleClick">
      <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-card {
    .transition(all,300ms,ease-out);
}

.level_0 {
    box-shadow: @shadow-low;
}

.level_1 {
    box-shadow: @shadow-medium;
}
.level_2 {
    box-shadow: @shadow-high;
}

.hover_0:hover {
    transform: translate(0px, -3px);
    box-shadow: @shadow-medium;
}

.hover_1:hover {
    transform: translate(0px, -3px);
    box-shadow: @shadow-high;
}

.hover_2:hover {
    transform: translate(0px, -3px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 15px 30px,
        rgba(0, 0, 0, 0.07) 0px 20px 40px;
}
</style>

<script>
import mixin from "common/mixin.js";

export default {
    mixins: [mixin],
    props: {
        level: {
            type: Number,
            default: 0
        },
        hover: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            this.$emit("click");
        }
    }
};
</script>
