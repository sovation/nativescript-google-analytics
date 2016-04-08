exports.initalize = function (trackingId) {
    var configureError = new interop.Reference();
    GGLContext.sharedInstance().configureWithError(configureError);
    
    var gai = GAI.sharedInstance();
    gai.trackUncaughtExceptions = true;
    var defaultTracker = GAI.sharedInstance().defaultTracker;
    global.tracker = defaultTracker;
    
    // Only use this in debug mode
    //gai.logger.logLevel = kGAILogLevelVerbose;
}

exports.logView = function(viewname){
    var gAIScreenName =  "&cd"; //kGAIScreenName
    var event = GAIDictionaryBuilder.createScreenView().setForKey(viewname, gAIScreenName);
    var builtEvent = event.build();
    
    //Future implimentation
    //GAITracker.prototype.send.call(global.tracker, builderResult);
    
    //Current Hack
    if(global.tracker)
        global.tracker.performSelectorWithObject("send:", builtEvent)
    else
        console.log("Unable to locate tracker to log view");
}

exports.logEvent = function(data){
    var event = GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(
      data.category,
      data.action,
      data.label,
      data.value  
    );
    var builtEvent = event.build();
    //Future implimentation
    //GAITracker.prototype.send.call(global.tracker, builderResult);
    
    //Current Hack
    if(global.tracker)
        global.tracker.performSelectorWithObject("send:", builtEvent)
    else
        console.log("Unable to locate tracker to log event");

}


exports.getTracker = function () {
    return global.gai.defaultTracker;
}