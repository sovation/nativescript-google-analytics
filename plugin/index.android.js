var application = require("application");


exports.initalize = function (config) {
    var context = application.android.context;
    
    var gai = com.google.android.gms.analytics.GoogleAnalytics.getInstance(context);
    var tracker = analytics.newTracker(config.trackingId);
    
    if(config.dispatchInterval){
        var interval = (config.dispatchInterval) ? config.dispatchInterval : 30;
        gai.setLocalDispatchPeriod(interval);
    }
    
    /*
    if(config.userId){
        tracker.setClientId(config.userId);
    }
    */
    
    if(config.logging){
        console.log("To enable debug logging use: adb shell setprop log.tag.GAv4 DEBUG");
    }
    
    global.gaInstance = gai;
    global.gaTracker = tracker;
}

exports.logView = function(viewname){
    global.gaTracker.setScreenName(viewname);
    var builtEvent = new com.google.android.gms.analytics.HitBuilders.ScreenViewBuilder().build();
    global.gaTracker.send(builtEvent);
}

exports.logEvent = function(data){
    console.log("Analytics Event:" + JSON.stringify(data) + " at " + new Date());
    var event = new com.google.android.gms.analytics.HitBuilders.EventBuilder().setCategory(data.category).setAction(data.action);

    if(data.label && data.label !== "" && data.label !== null)
        event.setLabel(data.label);
     
    if(data.value && data.value !== "" && data.value !== null)
        event.setValue(data.value);   
    
    var builtEvent = event.build();
    
    global.gaTracker.send(builtEvent);    
}

exports.getTracker = function () {
    return global.gaTracker;
}

exports.dispatch = dispatch;

function dispatch(){
    console.log("Flushing dispatch event queue");
    global.gaInstance.dispatchLocalHits();
}