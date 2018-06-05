import utils from "utils";

export default {
    props:{
        "hook-name":String,
        "hook-desc":String
    },
    mounted(){
        this.$el.addEventListener("click",()=>{
            this.TriggerGlobalHook("click");
        })
    },
    methods:{
        TriggerGlobalHook(type){
            var data = {
                type: type,
                name: this["hook-name"],
                describe: this["hook-desc"]
            }
            utils.event.triggerEvent("global_hook",data);
        }
    }
}
