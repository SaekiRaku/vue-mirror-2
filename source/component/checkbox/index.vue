<template>
  <div id="container" v-bind:class="['v-checkbox',disable?'disable':'']" @click="duang">
      <div id="checkbox">
          <div id="dot" v-bind:class="[vactive?'':'hidedot']"></div>
          <img  v-bind:class="[vactive?'':'hidecorrect']" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJDRDlCNzkyMUM4MTFFOEFGMDFDMUZBQjQzRDc3ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJDRDlCN0EyMUM4MTFFOEFGMDFDMUZBQjQzRDc3ODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQkNEOUI3NzIxQzgxMUU4QUYwMUMxRkFCNDNENzc4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQkNEOUI3ODIxQzgxMUU4QUYwMUMxRkFCNDNENzc4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqpXOsEAAAAGUExURf39/f///8h9z4wAAAACdFJOU/8A5bcwSgAAAV5JREFUeNrs2cmWhTAIBNCq///p3rzBIRAp4G0a18R7jkaGCP7gwiCDDDLIIIMMMsggg/wLBD9AALQjwF1Bh3FV0GJcFPQYZwVNxklBl3FU0GYcFPQZXwWNxkdBp/FW0Gq8FPQahYhP1CA7owLZGgXI3liVMVQbd2RRc7LGDVnVnKxxRZYxWeOCWFE544w4cRnjhPiRunFEtrGqcUCeRGvGF3kYrxgf5PmKuPFGQmuixg5BhbF5XMZ7DBr+izd2fdRwt7CRI8KG9zEaGTVuOGnFqD+CYSdIo1orBmPPQjOsomU0aZrByN5RjXUjsb6TbDDwrcnGqrkrNxjKTaKxblOLDQZzuWRYDXepwXDtEwx7dCg0KPQKYcMbgsoMSr1V0PDHuSKDdb2ofppaYlDq3cvPhQsMCrNOywl32mB4Nmw7q08aDM7SrX8dUgZDZw9sRpgwiIbIyqWDDLK5/gQYAFoqH4uX1qOyAAAAAElFTkSuQmCC" alt="">
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

#checkbox {
  float: left;
  margin-right: @grid;
  text-align: center;
  width: 2.5*@grid;
  height: 2.5*@grid;
  border-radius: @checkbox-radius;
  background: @color-main;

  img {
    transform: scale(1) translate(2px,-18px);
    display: block;
    width: 16px;

    .transition();
  }
}

.disable {
  pointer-events: none;
  color: @color-gray-dark;

  #checkbox {
    background: @color-gray;
  }
}

#dot {
  display: inline-block;
  margin-top: 6px;
  width: 1*@grid;
  height: 1*@grid;
  border-radius: 1*@grid;
  transform: scale(0);
  background: @color-white;

  .transition();
}

#label {
  margin: 0px;
  float: left;
  margin-top: -1px;
  line-height: 24px;
}

.hidecorrect {
  opacity: 0;
  transform: scale(0) translate(2px,-18px) !important;
}

.hidedot {
  border-radius: 0px !important;
  transform: scale(2) !important;
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
      type: Boolean
    },
    active: {
      type: Boolean
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
    if(this.active){
      this.$data.vactive = !this.active;
      Vue.nextTick(()=>{
        this.duang();
      })
    }
  },
  methods: {
    duang() {
      this.$data.vactive = !this.$data.vactive;
      var eventData = {
        type: "checkbox",
        name: this.scope,
        value: this.value,
        checked: this.$data.vactive
      };
      this.$emit("change", eventData);

      utils.event.triggerEvent("group_" + this.scope, eventData);
    }
  }
};
</script>