<template>
    <div class="v-tab">
        <div :class="['v-tab-header',align]">
            <div class="v-tab-slide" :style="{'width':width+'px','left':position+'px','top':top+'px'}"></div>
            <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="active(index)" :ref="'tabs_'+index">{{tab}}</div>
        </div>
        <div ref="content" class="v-tab-content">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-tab-header {
    .noselect();
    width: 100%;
    margin: 0px auto;
    display: flex;
    border-bottom: 1px solid @color-gray;
    position: relative;
}

.v-tab-slide {
    height: 2px;
    top: 50px;
    background: @color-main;
    .transition();
    position: absolute;
}

.left {
    justify-content: flex-start;
}
.center {
    justify-content: center;
}
.right {
    justify-content: flex-end;
}
.justify {
    justify-content: space-between;
}

.tab {
    min-width: 64px;
    cursor: pointer;
    padding: 16px;
    text-align: center;
}

.v-tab-content {
    position: relative;
    width: 100%;
    height: auto;
}

.v-page {
}
</style>

<script>
import mixin from "common/mixin.js";
import utils from "utils";

export default {
    mixins: [mixin],
    props: {
        align: {
            //对齐模式
            type: String,
            default: "justify"
        }
    },
    data() {
        return {
            name: utils.guid(),
            tabs: [],
            now: 0,

            top: 0,
            width: 0,
            position: 0
        };
    },
    mounted() {
        if (!this.name) {
            return;
        }
        utils.event.registerEvent(`page_add_${this.name}`, this.addTab);
        this.$nextTick(() => {
            this.active(0);
        });
    },
    methods: {
        addTab(data) {
            this.tabs.push(data);
        },
        active(index) {
            this.now = index;
            this.$nextTick(() => {
                if (!!this.$refs["tabs_" + index][0]) {
                    this.width = this.$refs["tabs_" + index][0].offsetWidth;
                    this.top = this.$refs["tabs_" + index][0].offsetHeight - 2;
                    this.position = this.$refs["tabs_" + index][0].offsetLeft;
                }
            });
            utils.event.triggerEvent(
                `page_active_${this.name}`,
                this.tabs[index]
            );
        }
    }
};
</script>
