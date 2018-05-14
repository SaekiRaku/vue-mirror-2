<template>
  <div>
    <div v-bind:class="['v-modal-container',display?'':'noevent']" @click.self="close">
      <div v-bind:class="['v-modal',display?'':'hidden']">
          <slot></slot>
      </div>
    </div>
    <v-mask v-bind:show="display"></v-mask>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-modal-container {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: @top - 1;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  pointer-events: auto;
  overflow: auto;
}

.v-modal-container:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  width: 0;
}

.v-modal {
  margin: 2*@grid;
  background: @color-white;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  box-shadow: @shadow-high;
  border-radius: @modal-radius;

  .transition(all,500ms);
}

.noevent {
  pointer-events: none !important;
  overflow: hidden !important;
}

.hidden {
  opacity: 0;
  transform: translate(0px,30px);
}

</style>

<script>
import utils from "utils";

export default {
  props: {
    name: {
      type: String
    },
    show:{
      type:Boolean,
      default:false
    },
    canclose:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      display:false
    }
  },
  watch:{
    show(val){
      this.$data.display = val;
    }
  },
  mounted() {
    this.$data.display = this.$props.show;
    if (!!this.name) {
      utils.event.registerEvent("modal_" + this.name, this.toggleModal);
    }
  },
  methods: {
    toggleModal(show) {
      if(show==undefined){
        this.$data.display = !this.$data.display;
      }else{
        this.$data.display = show;
      }
    },
    close(){
      if(this.$props.canclose==true){
          this.$data.display = false;
      }
    }
  }
};
</script>
