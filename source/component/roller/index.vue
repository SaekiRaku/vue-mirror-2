<template>
    <div class="v-roller">
        <div :class="['v-roller-header',align]">
            <div class="v-roller-slide" :style="{'width':width+'px','left':position+'px','top':top+'px'}"></div>
            <div class="roller" v-for="(roller, index) in rollers" :key="index" @click="active(index)" :ref="'rollers_'+index">{{roller}}</div>
        </div>
        <div class="v-roller-content">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-roller-header {
    .noselect();
    width: 100%;
    margin: 0px auto;
    display: flex;
    border-bottom: 1px solid @color-gray;
    position: relative;
}

.v-roller-slide {
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

.roller {
    min-width: 64px;
    cursor: pointer;
    padding: 16px;
    text-align: center;
}

.v-roller-content {
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
            rollers: [],
            now: 0,

            top:0,
            width:0,
            position:0
        };
    },
    mounted() {
        if (!this.name) {
            return;
        }
        utils.event.registerEvent(`page_add_${this.name}`, this.addRoller);
        this.$nextTick(()=>{
            this.active(0);
        })
    },
    methods: {
        addRoller(data) {
            this.rollers.push(data);
        },
        active(index) {
            this.now = index;
            this.$nextTick(()=>{
                if(!!this.$refs["rollers_"+index][0]){
                    this.width = this.$refs["rollers_"+index][0].offsetWidth;
                    this.top = this.$refs["rollers_"+index][0].offsetHeight;
                    this.position = this.$refs["rollers_"+index][0].offsetLeft;
                }
            })
            utils.event.triggerEvent(`page_active_${this.name}`, this.rollers[index]);
        }
    }
};
</script>
