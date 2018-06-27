import VRipple from "common/ripple/index.vue";
import VToast from "common/toast/index.vue";
import VMask from "common/mask/index.vue";
import VItem from "common/item/index.vue";
import VPage from "common/page/index.vue";

import VButton from "component/button/index.vue";
import VInput from "component/input/index.vue";
import VTextarea from "component/textarea/index.vue";
import VSwitch from "component/switch/index.vue";
import VGroup from "component/group/index.vue";
import VRadio from "component/radio/index.vue";
import VCheckbox from "component/checkbox/index.vue";
import VDropdown from "component/dropdown/index.vue";
import VModal from "component/modal/index.vue";
import VMessage from "component/message/index.vue";
import VCard from "component/card/index.vue";
import VAvatar from "component/avatar/index.vue";
import VTag from "component/tag/index.vue";

import VTab from "component/tab/tab.vue";
// import VRoller from "component/roller/index.vue";

import VTitle from "component/document/title.vue";
import VSubtitle from "component/document/subtitle.vue";
import VQuote from "component/document/quote.vue";
import VDivider from "component/document/divider.vue";
import VText from "component/document/text.vue";

var components = {
    VRipple,
    VToast,
    VMask,
    VItem,
    VPage,
    
    VButton,
    VInput,
    VTextarea,
    VSwitch,
    VGroup,
    VRadio,
    VCheckbox,
    VDropdown,
    VModal,
    VMessage,
    VCard,
    VAvatar,
    VTag,

    VTab,
    // VRoller,
    
    VTitle,
    VSubtitle,
    VQuote,
    VDivider,
    VText
}

export default {
    install: function(Vue){
        for(var i in components){
            var res = Vue.component(i,components[i]);
        }
        Vue.youth = require("core/index.js");
        Vue.prototype.youth = require("core/index.js");

        if (!!document) {
            var youth = document.createElement("span");
            youth.appendChild(document.createElement("v-toast"));
            document.body.appendChild(youth);
            var vm = new Vue({
                el: youth
            });
        }
    }
}