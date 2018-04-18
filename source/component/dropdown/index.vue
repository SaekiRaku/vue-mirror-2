<template>
  <div id="container" v-bind:class="['v-dropdown',disable?'disable':'']" @click.stop="duang">
      <div id="box">
        {{value}}
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDE3M0U1RjkzQUUwMTFFOEIyMjBBMDJGMEM5M0YxQ0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDE3M0U1RkEzQUUwMTFFOEIyMjBBMDJGMEM5M0YxQ0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTczRTVGNzNBRTAxMUU4QjIyMEEwMkYwQzkzRjFDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTczRTVGODNBRTAxMUU4QjIyMEEwMkYwQzkzRjFDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsS2TdMAAAAGUExURSgoKP///9oR+5IAAAACdFJOU/8A5bcwSgAAAalJREFUeNrs2zliw0AMA8DN/z+d2im1PBBr+AJPI0sgeH6+ZA4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjI56/4MyOQMzPdkDM3rZBzUiUn19EIOSdX8krIARmQgIC8EeKp5Q/Ru9Yr3n6/5Xuk+wsx1BH7qTsRPkQ6HqUoiY5ncVCg42Guled4GtDFOR4njWmO55FpmOMi+81y3ITYUY6rND7JcbdWCHJc7kdyHLeLnhjH9cYqxXG/egtxFOwQMxwVy9AIR8lWN8FRs54OcBTt2fcdVYWBdUdZ82HbUVfhWHYUdlF2HZWlmlVHaTto01Fbc1p0FPe19hzVxbM1R3mDbstRXwVccjR0GnccHeXMFUdLy3TD0VOXXXA09X7nHV0F5nFHWxN72tFXKR92NHbjZx2dJf9RR+u1wqSj9+xi0NF8PzLn6D6EGXO0X/RMOSZOk/oRQ5CZAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAfnv8yvAAHvgibTf9GwZAAAAAElFTkSuQmCC" alt="">
      </div>
      <div id="list" v-bind:class="[toggle?'open':'close']">
        <slot>

        </slot>
      </div>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

#container {
    position: relative;
    min-width: 150px;
    cursor: pointer;
    display: inline-block;
    .noselect();
}

#box {
    padding: @grid 2*@grid;
    line-height: 24px;
    box-shadow: 0 0 0 1px @color-gray;
    border-radius: @dropdown-radius;
    .transition();

    img {
        position: absolute;
        right: 12px;
        top: 14px;
        width: 12px;
        height: 12px;
    }
}

#box:hover {
    box-shadow: 0 0 0 2px @color-main;
}

#list {
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    position: absolute;
    background: @color-white;
    z-index: @top;
    box-shadow: @shadow-low;
    margin-top: -40px;
    .transition();

    .v-item {
        padding: 2*@grid;
        display: block;
        .transition();
    }

    .v-item:hover {
        background: @color-main;
        color: @color-white;
    }
}

.open {
    width: 100% !important;
    opacity: 1;
    transform: scaleY(1) translateY(0px);
}

.close {
    width: 0% !important;
    opacity: 0;
    transform: scaleY(0) translateY(-50%);
}
</style>

<script>
import utils from "utils";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export default {
    data() {
        return {
            value: "请选择...",
            toggle: false,
            scope: ""
        };
    },
    props: {
        name: {
            type: String
        },
        disable: {
            type: Boolean
        }
    },
    watch: {
        active(val) {
            this.vactive = !val;
            this.duang();
        }
    },
    mounted(){
      document.addEventListener("click",()=>{
        this.toggle = false;
      })
    },
    methods: {
        duang(evt) {
            if (evt.target.className == "v-item") {
                this.value = evt.target.innerHTML;
                var eventData = {
                    type: "string",
                    name: this.scope,
                    value: this.$data.value
                };
                this.$emit("change", eventData);

                utils.event.triggerEvent("group_" + this.scope, eventData);
            }
            this.toggle = !this.toggle;
        }
    }
};
</script>