/**
 * Global event
 */
var events = {

}

class event {
    static registerEvent(eventName, callback) {
        !events[eventName] && (events[eventName] = []);
        events[eventName].push(callback);
    }

    static triggerEvent(eventName){
        var args = Array.prototype.slice.call(arguments);
        args.splice(0,1);
        events[eventName] && events[eventName].map(function(cb){
            cb.apply(this,args);
        });
    }
}

export default event;