<template>
  <div id="container">
      <transition-group name="trans">
        <span style="display:block; margin-top:8px;" v-for="obj in list" v-bind:key="obj.id">
            <div class="v-toast">
                <p v-bind:class="obj.type?'danger':'normal'">
                    {{obj.content}}
                </p>
            </div>
            <br>
        </span>
      </transition-group>
  </div>
</template>

<style lang="less" scoped>
@import "~style/basic.less";
#container {
  pointer-events: none;
  position: fixed;
  width: 100%;
  bottom: 38.2%;
  z-index: @top;
  .noselect();
}

.v-toast {
  color: @color-black;
  min-width: 120px;
  max-width: 80%;
  display: inline-block;
  padding: 1.5*@grid;
  background: @color-white;
  border-radius: @toast-radius;
  box-shadow: @shadow-medium;
  line-height: 24px;
  p {
    margin: 0px;
    padding: 0px 2*@grid;
  }
}

.normal {
  border-left: 2px solid @color-main;
}

.danger {
  border-left: 2px solid @color-danger;
}

.trans-move {
  .transition(all,700ms);
}

.trans-enter-active {
  .transition(all, 400ms);
}
.trans-leave-active {
  .transition(all, 400ms, @ease-strong-out);
}
.trans-enter {
  opacity: 0;
  transform: translateY(30px);
}

.trans-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

<script>
import utils from "utils";

export default {
  data: function() {
    return {
      list: []
    };
  },
  mounted: function() {
    utils.event.registerEvent("system_toast", this.addToast);
  },
  methods: {
    addToast(content, type = false, timeout = "auto") {
      if (typeof content !== "string") {
        return;
      }
      var id = utils.guid();
      this.list.push({
        id,
        type,
        content
      });
      if (timeout == "auto") {
        timeout = content.length * 300;
      }
      setTimeout(() => {
        this.removeToast(id);
      }, timeout);
    },
    removeToast(id) {
      for (var i in this.$data.list) {
        var obj = this.$data.list[i];
        if (obj.id == id) {
          this.$data.list.splice(i, 1);
        }
      }
    }
  }
};
</script>