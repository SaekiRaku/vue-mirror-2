<template>
    <div id="ripple" v-bind:class="shape" v-bind:style="{'width':width+'px','height':height+'px','left':'0px','top':'0px'}">
      <div class="ripple" v-for="pos in line" v-bind:key="pos.key" v-bind:style="{'background':background,'position':'absolute','margin-left':(pos.x-Math.max(width,height)/2)+'px','margin-top':(pos.y-Math.max(width,height)/2)+'px','width':Math.max(width,height)+'px','height':Math.max(width,height)+'px'}"></div>
    </div>
</template>

<style lang="less" scoped>
#ripple {
  margin: 0px;
  position: absolute;
  overflow: hidden;
  transform: translate(0,0);
}

.ripple {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  pointer-events: none;

  -webkit-animation: ripple 500ms forwards;
  -moz-animation: ripple 500ms forwards;
  -o-animation: ripple 500ms forwards;
  animation: ripple 500ms forwards;
}

.circle{
  border-radius: 100%;
}

@keyframes ripple {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@-o-keyframes ripple {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@-moz-keyframes ripple {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@-webkit-keyframes ripple {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

<script>
var resize;

export default {
  data() {
    return {
      width: 0,
      height: 0,

      line: []
    };
  },
  props: {
    position:{
      type:Object
    },
    shape:{
      type:String
    },
    theme:{
      type:String,
      default:"light",
      validator(value){
        if(["dark","light"].indexOf(value)==-1){
          return false;
        }else{
          return true;
        }
      }
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", ()=>{
      if (!resize) {
        clearTimeout(resize);
      }
      resize = setTimeout(this.resize(),500);
    });
  },
  watch: {
    position(val) {
      val.key = Math.random();
      if (this.$data.line.length >= 7) {
        this.$data.line = [];
      }
      this.$data.line.push(val);
    }
  },
  computed:{
    background(){
      if(this.$props.theme=="light"){
        return "rgba(255, 255, 255, 0.5)";
      }else{
        return "rgba(33, 33, 33, 0.2)"
      }
    }
  },
  methods: {
    resize() {
      var {
        clientWidth,
        clientHeight
      } = this.$parent.$el;
      this.$data.width = clientWidth;
      this.$data.height = clientHeight;
    }
  }
};
</script>
