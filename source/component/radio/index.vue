<template>
  <div id="container" v-bind:class="['v-radio',disable?'disable':'']" @click="handleClick">
      <div id="radio">
          <div id="dot" v-bind:class="[active?'':'deactive']"></div>
      </div>
      <p id="label">
          <slot></slot>
      </p>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

#container {
  cursor: pointer;
  display: inline-block;
  .noselect();
}

#radio {
  float: left;
  margin-right: @grid;
  text-align: center;
  width: 2.5*@grid;
  height: 2.5*@grid;
  border-radius: 2.5*@grid;
  background: @color-main;
}

.disable {
  pointer-events: none;
    color: @color-gray-dark;

    #radio {
        background: @color-gray;
    }
}

#dot {
  display: inline-block;
  margin-top: 6px;
  width: 1*@grid;
  height: 1*@grid;
  border-radius: 1*@grid;
  background: @color-white;

  .transition();
}

#label {
  margin: 0px;
  float: left;
  margin-top: -1px;
}

.deactive {
  transform: scale(2);
}
</style>

<script>
import utils from "utils";

export default {
  data() {
    return {
      scope: "",
      active: false
    };
  },
  props: {
    name: {
      type: String
    },
    disable: {
      type:Boolean
    },
    check: {
      type:Boolean
    },
    value: {}
  },
  mounted() {
    this.scope = this.name || this.$parent.name || "";
    if (this.scope) {
      utils.event.registerEvent("radio_clear_" + this.scope, this.clearActive);
    }
    if(this.check){
      Vue.nextTick(()=>{
        this.duang();
      })
    }
  },
  methods: {
    handleClick(evt) {
      utils.event.triggerEvent("radio_clear_" + this.scope);
      this.duang();
    },
    duang() {
      this.$data.active = true;
      var eventData = {
        type: "radio",
        name: this.scope,
        value: this.value
      }
      this.$emit("change", eventData);
      utils.event.triggerEvent("group_"+this.scope, eventData);
    },
    clearActive() {
      this.$data.active = false;
    }
  }
};
</script>