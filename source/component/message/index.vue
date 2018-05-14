<template>
    <div v-bind:class="['v-message',type,vshow?'':'hidden']">
        <slot></slot>
        <img class="v-message-close" v-if="canclose" @click="close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzExODhGRjkyNEY1MTFFODlEQjZDNEIxRTNGNkM2QTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzExODhGRkEyNEY1MTFFODlEQjZDNEIxRTNGNkM2QTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMTE4OEZGNzI0RjUxMUU4OURCNkM0QjFFM0Y2QzZBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMTE4OEZGODI0RjUxMUU4OURCNkM0QjFFM0Y2QzZBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg6bUw0AAAAGUExURf39/f///8h9z4wAAAACdFJOU/8A5bcwSgAAAdBJREFUeNrsmssWwjAIRC///9OufFTbZGA4bGyXHvBqmxKYCTFwcUNuyOszg8xZMqdxGIyTZM7jMBi/yVzEYTB+krmKw2B8J3MZh8H4SuY6DoNxTGYRh8E4JLOKw2B8JrOMw2B8JLOOw2C8k9nEYTBeyeziMBjPZLZxGAwdQp2RgFBmID74DUX6dYRF0e4A4VDEu0wYFPVJEnWKvFqIMkVfkUSVklj1RJGSebOIGiX19hIlSq5CUCtGuXVIpeRlKx2FwpquphTKRb4yRC8lNZ90MqJYxHM7AtFIKYxzbYzlzNjFCKNJ0LsNoolijNgtjO0c38EIqwlVO9l9P+0zwmvaxb5fmT9cRgOkRyVi4J8w8EwYWF0MvCcMvPEM1C4GqjAD+wkDOyMDezwD3QoDfVdrl9recOuQzfe0dPXb39ownwj3w560NN3HmxlVTcaZfnW9pD7HZ7SMqiKR0xlq2kpWA6ioRPn5PK93VepFVrmr1decBlndjzJqan3/1nVhp9+Z0Op7DIE2a8PyT2STxnKCZLvJ8rRk48xy52QL0PIZZTPTckxlW9byfmWD2XKxZavc8uNl0986WSAfX7DOSMgHMazTHvKRkv7rhvwp5CHAACWdF3PtUePqAAAAAElFTkSuQmCC" alt="">
    </div>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-message {
        padding: @grid;
        color: @color-white;
        border-radius: @message-radius;
        .transition();
        .noselect();
    }

    .normal {
        background: @color-main;
    }

    .danger {
        background: @color-danger;
    }

    .v-message-close {
        cursor: pointer;
        width: 12px;
        height: 12px;
        float: right;
        padding: 4px;

        .transition();
    }

    .hidden {
        height: 0px;
        padding: 0px;
        opacity: 0;
        transform: scale(0.9);
        pointer-events: none;
    }

    #close:hover {
        transform: rotate(90deg);
    }
</style>

<script>
export default {
    data(){
        return {
            vshow:false,
        }
    },
    props:{
        type:{
            type:String,
            default:"normal"
        },
        canclose: {
            type:Boolean,
            default:false
        },
        show:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        show(){
            this.$data.vshow = this.show;
        }
    },
    methods:{
        close(){
            this.$data.vshow = false;
        }
    }
}
</script>
