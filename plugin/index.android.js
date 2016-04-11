var application = require("application");

exports.initalize = function (trackingId) {
    var context = application.android.context;
    
    var analytics = com.google.android.gms.analytics.GoogleAnalytics.getInstance(context);
    var tracker = analytics.newTracker(trackingId);
    
    global.gaInstance = analytics;
    global.tracker = tracker;
}

exports.logView = function(viewname){
    global.tracker.setScreenName(viewname);
    var builtEvent = new com.google.android.gms.analytics.HitBuilders.ScreenViewBuilder().build();
    global.tracker.send(builtEvent);
}

exports.logEvent = function(data){
    console.log("Analytics Event:" + JSON.stringify(data));
    var event = new com.google.android.gms.analytics.HitBuilders.EventBuilder().setCategory(data.category).setAction(data.action);

    if(data.label && data.label !== "" && data.label !== null)
        event.setLabel(data.label);
     
    if(data.value && data.value !== "" && data.value !== null)
        event.setValue(data.value);   
    
    var builtEvent = event.build();
    
    global.tracker.send(builtEvent);
    global.gaInstance.dispatchLocalHits();
    
}

exports.getTracker = function () {
    return global.tracker;
}