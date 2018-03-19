import event from "./event.js";

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function clone(data){
    return  JSON.parse(JSON.stringify(data));
}

export default {
    clone,
    event,
    guid
}