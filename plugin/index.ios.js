exports.initalize = function (trackingId) {
    var configureError = new interop.Reference();
    GGLContext.sharedInstance().configureWithError(configureError);

    var gai = GAI.sharedInstance();
    gai.trackUncaughtExceptions = true;
    var defaultTracker = gai.trackerWithTrackingId(trackingId);
    global.tracker = defaultTracker;

    // Only use this in debug mode
    var logLevel = 4; //kGAILogLevelVerbose
    gai.logger.logLevel = logLevel;
}

exports.logView = function(viewname){
    var gAIScreenName =  "&cd"; //kGAIScreenName
    var event = GAIDictionaryBuilder.createScreenView().setForKey(viewname, gAIScreenName);
    var builtEvent = event.build();

    if(global.tracker)
        GAITracker.prototype.send.call(global.tracker, builtEvent);
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
    
    if(global.tracker)
        GAITracker.prototype.send.call(global.tracker, builtEvent);
    else
        console.log("Unable to locate tracker to log event");
}


exports.getTracker = function () {
    return global.gai.defaultTracker;
}