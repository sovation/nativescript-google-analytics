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

exports.logEvent = function(category, action, label, value){
    var event = new com.google.android.gms.analytics.HitBuilders.EventBuilder();

    if(category && category !== "" && category !== null)
        event.setCategory(category);
        
    if(action && action !== "" && action !== null)
        event.setAction(action);
    
    if(label && label !== "" && label !== null)
        event.setLabel(label);
     
    if(value && value !== "" && value !== null)
        event.setValue(value);   
    
    var bulitEvent = event.build();
    
    global.tracker.send(bulitEvent);
    
}

exports.getTracker = function () {
    return global.tracker;
}