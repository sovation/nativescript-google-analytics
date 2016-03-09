exports.initalize = function (trackingId) {
    //UA-74227193-1
    
    /*
    var configureError = new interop.Reference();
    GGLContext.sharedInstance().configureWithError(configureError);
*/
debugger;
    var gai = GAI.sharedInstance();
    gai.trackUncaughtExceptions = true;
    global.gai = gai;
    gai.trackerWithTrackingId(trackingId);
    /*
    debugger;
    // Only use this in debug mode
    gai.logger.logLevel = kGAILogLevelVerbose;
    */
}

exports.logView = function(viewname){
    debugger;
    var tracker = global.gai.defaultTracker;
    var key = kGAIScreenName;

    tracker.setValueForKey(viewname, key)
    
}


exports.getTracker = function () {
    return global.gai.defaultTracker;
}