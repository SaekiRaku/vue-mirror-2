import utils from "utils";

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