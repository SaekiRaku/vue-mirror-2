<template>
    <div v-bind:class="['v-tag',vactive?'active':'deactive']" v-on:click="duang">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

.v-tag {
  .noselect();
  display: inline-block;
  padding: @grid 2*@grid;
  border-radius: 4*@grid;
  cursor: pointer;
    .transition();
}

.deactive {
    border: 1px solid @color-gray;
}

.deactive:hover {
    border: 1px solid @color-main;
    color: @color-main;
}

.active {
    border: 1px solid @color-main;    
    color: @color-white;
    background: @color-main;
}

.active:hover {
    background: @color-main-light;
}
</style>

<script>
export default {
  data() {
    return {
      vactive: false
    };
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    active(val) {
      this.$data.vactive = val;
    }
  },
  mounted(){
      this.$data.vactive = this.active;  
  },
  methods:{
      duang(){
          this.$data.vactive = !this.$data.vactive;
          this.$emit("change",this.$data.vactive);
      }
  }
};
</script>
