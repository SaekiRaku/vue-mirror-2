<template>
  <div v-bind:class="['v-radio',disable?'disable':'']" @click="duang">
      <div class="v-radio-box"><div v-bind:class="['v-radio-dot',vactive?'':'deactive']"></div></div>
      <p class="v-label">
          <slot></slot>
      </p>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-radio {
  cursor: pointer;
  display: inline-block;
  .noselect();
}

.v-radio-box {
  font-size: 0px;
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

.v-radio-dot {
  margin-top: 6px;
  display: inline-block;
  width: 1*@grid;
  height: 1*@grid;
  border-radius: 1*@grid;
  background: @color-white;

  .transition();
}

.v-label {
  margin: 0px;
  float: left;
  margin-top: -1px;
  line-height: 24px;
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
      vactive: false
    };
  },
  props: {
    name: {
      type: String
    },
    disable: {
      type:Boolean
    },
    active: {
      type:Boolean
    },
    value: {}
  },
  watch: {
    active(val) {
      this.vactive = !val;
      this.duang();
    }
  },
  mounted() {
    this.scope = this.name || this.$parent.name || "";
    if (this.scope) {
      utils.event.registerEvent("radio_clear_" + this.scope, this.clearActive);
    }
    if(this.active){
      this.$nextTick(()=>{
        this.duang();
      })
    }
  },
  methods: {
    duang() {
      utils.event.triggerEvent("radio_clear_" + this.scope);
      this.$data.vactive = true;
      var eventData = {
        type: "string",
        name: this.scope,
        value: this.value
      }
      this.$emit("change", eventData);
      utils.event.triggerEvent("group_"+this.scope, eventData);
    },
    clearActive() {
      this.$data.vactive = false;
    }
  }
};
</script>