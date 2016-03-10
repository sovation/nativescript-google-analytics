exports.initalize = function (trackingId) {
    //UA-74227193-1
    var configureError = new interop.Reference();
    GGLContext.sharedInstance().configureWithError(configureError);
    
    var gai = GAI.sharedInstance();
    gai.trackUncaughtExceptions = true;
    //gai.trackerWithTrackingId(trackingId);
    global.tracker = GAI.sharedInstance().defaultTracker;
    /*
    debugger;
    // Only use this in debug mode
    gai.logger.logLevel = kGAILogLevelVerbose;
    */
}

exports.logView = function(viewname){
    /*
    debugger;
    var tracker = global.gai.defaultTracker;
    var key = kGAIScreenName;

    tracker.setValueForKey(viewname, key)
    */
}

exports.logEvent = function(data){

    
    var event = GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(
      data.category,
      data.action,
      data.label,
      data.value  
    );
    
    var eventData = event.build();
    global.tracker.send = eventData;
        debugger;
    console.log("Event Sent");
    
    /*
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
    */
    
}


exports.getTracker = function () {
    return global.gai.defaultTracker;
}