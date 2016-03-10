var application = require("application");

exports.initalize = function (trackingId) {
    
    var context = application.android.context;
    
    var analytics = com.google.android.gms.analytics.GoogleAnalytics.getInstance(context);
    var tracker = analytics.newTracker(trackingId);
    
    global.tracker = tracker;
}

exports.logView = function(viewname){
    //var builder = com.google.android.gms.analytics.HitBuilders.EventBuilder();
    //global.tracker.send()
}

exports.logEvent = function(data){
    var event = new com.google.android.gms.analytics.HitBuilders.EventBuilder();

    if(data.category && data.category !== "" && data.category !== null)
        event.setCategory(data.category);
        
    if(data.action && data.action !== "" && data.action !== null)
        event.setAction(data.action);
    
    if(data.label && data.label !== "" && data.label !== null)
        event.setLabel(data.label);
     
    if(data.value && data.value !== "" && data.value !== null)
        event.setValue(data.value);   
    
    var bulitEvent = event.build();
    
    global.tracker.send(bulitEvent);
    
}

exports.getTracker = function () {
    return global.tracker;
}