var application = require("application");

exports.initalize = function (trackingId) {
    
    var context = application.android.context;
    
    var analytics = com.google.android.gms.analytics.GoogleAnalytics.getInstance(context);
    var tracker = analytics.newTracker(trackingId);
    
    global.tracker = tracker;
}

exports.logView = function(viewname){
    global.tracker.setScreenName(viewname);
    var bulitEvent = new com.google.android.gms.analytics.HitBuilders.ScreenViewBuilder().build();
    global.tracker.send(bulitEvent);
}

exports.logEvent = function(data){
    var event = new com.google.android.gms.analytics.HitBuilders.EventBuilder();

    event.setCategory(data.category);
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