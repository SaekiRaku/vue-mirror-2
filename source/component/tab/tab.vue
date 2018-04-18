<template>
    <div class="v-tab">
        <div id="header" :class="align">
            <div id="slide" :style="{'width':width+'px','left':position+'px'}"></div>
            <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="active(index)" :ref="'tabs_'+index">{{tab}}</div>
        </div>
        <div id="v-content">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

#header {
    .noselect();
    width: 100%;
    margin: 0px auto;
    display: flex;
    border-bottom: 1px solid @color-gray;
    position: relative;
}

#slide {
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

#content {
    position: relative;
    width: 100%;
    height: auto;
}

.v-page {
}
</style>

<script>
import utils from "utils";

export default {
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

            width:0,
            position:0
        };
    },
    mounted() {
        if (!this.name) {
            return;
        }
        utils.event.registerEvent(`tab_add_${this.name}`, this.addTab);
        this.$nextTick(()=>{
            this.active(0);
        })
    },
    methods: {
        addTab(data) {
            this.tabs.push(data);
        },
        active(index) {
            this.now = index;
            this.$nextTick(()=>{
                if(!!this.$refs["tabs_"+index][0]){
                    this.width = this.$refs["tabs_"+index][0].offsetWidth;
                    this.position = this.$refs["tabs_"+index][0].offsetLeft;
                }
            })
            utils.event.triggerEvent(`tab_active_${this.name}`, this.tabs[index]);
        }
    }
};
</script>
