import VRipple from "common/ripple/index.vue";
import VToast from "common/toast/index.vue";
import VMask from "common/mask/index.vue";

import VButton from "component/button/index.vue";
import VInput from "component/input/index.vue";
import VSwitch from "component/switch/index.vue";
import VGroup from "component/group/index.vue";
import VRadio from "component/radio/index.vue";
import VCheckbox from "component/checkbox/index.vue";
import VModal from "component/modal/index.vue";

var components = {
    VRipple,
    VToast,
    VMask,
    
    VButton,
    VInput,
    VSwitch,
    VGroup,
    VRadio,
    VCheckbox,
    VModal
}

export default {
    install: function(Vue){
        for(var i in components){
            var res = Vue.component(i,components[i]);
        }
        Vue.prototype.youth = require("core/index.js");
    }
}