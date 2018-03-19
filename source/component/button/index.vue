<template>
    <div id="button" v-bind:class="['v-button',type,shape,size,disable?'disable':'']" @click="handleClick">
        <v-ripple v-bind:position="position" v-bind:theme="theme" v-bind:shape="shape"></v-ripple>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

#button {
  position: relative;
  padding: @grid 3*@grid;
  font-size: 16px;
  display: inline-block;
  border-radius: @button-radius;
  cursor: pointer;

  .noselect();
  .transition();
}

#button:hover {
  // transform: translate(0px, -2px);
}

// Type

.link {
  color: @color-main;
}

.link:hover {
  transform: none !important;
  box-shadow: none !important;
  opacity: 0.8;
}

.default {
  color: @color-black;
  border: 1px solid #eee;
  background: #fff;
}

.ghost {
  color: @color-main;
  border: 1px solid @color-main;
}


.primary {
  color: #fff;
  background: @color-main;
}

.primary:hover {
  background: @color-main-light;
}

.danger {
  color: #fff;
  background: @color-danger;
}

.danger:hover {
  background: @color-danger-light;
}

.disable {
  pointer-events: none;
  background: @color-gray !important;
  color: @color-gray-dark;
  transform: translate3d(0,0,0);
}

// Size

.small {
}

.large {
  text-align: center;
  display: block !important;
}

// Shape

.rectangle {
}

.circle {
  text-align: center;
  padding: 0px !important;
  width: 5*@grid;
  height: 5*@grid;
  line-height: 5*@grid;
  border-radius: 50% !important;
}
</style>

<script>
export default {
  data() {
    return {
      position: {
        x: 0,
        y: 0
      }
    };
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "small"
    },
    shape: {
      type: String,
      default: "rectangle"
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    theme(){
      if(["link","default","ghost"].indexOf(this.$props.type)!=-1){
        return "dark";
      }else{
        return "light";
      }
    }
  },
  methods: {
    handleClick(evt) {
      this.$data.position = { x: evt.layerX, y: evt.layerY };
      this.$emit("click");
    }
  }
};
</script>
