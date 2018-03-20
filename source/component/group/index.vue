<template>
    <span>
        <slot></slot>
    </span>
</template>

<style lang="less" scoped>

</style>

<script>
import utils from "utils";

export default {
  data() {
    return {
      merge: {}
    };
  },
  props: {
    name: {
      type: String
    }
  },
  mounted(){
    utils.event.registerEvent("group_"+this.name,this.handleChange);
  },
  methods: {
    handleChange(obj) {
      /*
        {
          type: "string" | "checkbox" | "group",
          name: String,
          value: String | Array
        }
      */
      if (obj.type == "string") {
        this.$data.merge[obj.name] = obj.value;
      }else if(obj.type == "checkbox"){
        if(!this.$data.merge[obj.name]){
          this.$data.merge[obj.name] = []
        }
        var arr = this.$data.merge[obj.name];
        if(obj.checked){
          arr.push(obj.value);
        }else{
          arr.splice(arr.indexOf(obj.value),1);
        }
      }else if(obj.type == "group"){
        if(!this.$data.merge[obj.name]){
          this.$data.merge[obj.name] = {}
        }
        for(var i in obj.value){
          this.$data.merge[obj.name][i] = obj.value[i];
        }
      }

      this.$emit("change",utils.clone(this.$data.merge));
      if(this.$parent.name){
        var eventData = {
          type: "group",
          name: this.$parent.name,
          value: utils.clone(this.$data.merge)
        }
        utils.event.triggerEvent("group_"+this.$parent.name, eventData);      
      }
    }
  }
};
</script>
