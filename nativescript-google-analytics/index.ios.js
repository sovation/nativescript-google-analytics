exports.initalize = function (trackingId) {
    var configureError = new interop.Reference();
    GGLContext.sharedInstance().configureWithError(configureError);
    
    var gai = GAI.sharedInstance();
    gai.trackUncaughtExceptions = true;
    global.tracker = GAI.sharedInstance().defaultTracker;
    
    // Only use this in debug mode
    //gai.logger.logLevel = kGAILogLevelVerbose;
}

exports.logView = function(viewname){
    var event = GAIDictionaryBuilder.createScreenView().setForKey(viewname, kGAIScreenName);
    var builtEvent = event.build();
    
    //Future implimentation
    //GAITracker.prototype.send.call(global.tracker, builderResult);
    
    //Current Hack
    global.tracker.performSelectorWithObject("send:", builtEvent)
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
    global.tracker.performSelectorWithObject("send:", builtEvent)

}


exports.getTracker = function () {
    return global.gai.defaultTracker;
}