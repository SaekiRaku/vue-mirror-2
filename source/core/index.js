import utils from "utils";

if (!!document) {
    var youth = document.createElement("span");
    youth.appendChild(document.createElement("v-toast"));
    document.body.appendChild(youth);
    var vm = new Vue({
        el: youth
    });
}

function toast(content,type,timeout){
    utils.event.triggerEvent("system_toast",content,type,timeout);
}

function open(name){
    utils.event.triggerEvent("modal_"+name,true);
}

function close(name){
    utils.event.triggerEvent("modal_"+name,false);
}

export default {
    toast,
    open,
    close
}