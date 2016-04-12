var application = require("application");


exports.initalize = function (config) {
    if(config.trackingId){
        var configureError = new interop.Reference();
        GGLContext.sharedInstance().configureWithError(configureError);

        var gai = GAI.sharedInstance();
        gai.trackUncaughtExceptions = true;
        var defaultTracker = gai.trackerWithTrackingId(config.trackingId);

        
        if(config.dispatchInterval){
            gai.dispatchInterval = config.dispatchInterval;
        } 

        /*
        if(config.userId){
            var gAIUserId = "&uid"; //kGAIUserId
            global.gaTracker.setValueForKey(gAIUserId, config.userId);
        }
        */

        if(config.logging){
            var logLevel = 4; //kGAILogLevelVerbose
            gai.logger.logLevel = logLevel;
        }
        
        global.gaTracker = defaultTracker;
        global.gaInstance = gai;
    }else{
        throw "Sup boss, how do you plan on tracking with no trackingId?  Please add it to the config";
    }
}

exports.logView = function(viewname){
    console.log("Analytics Event: Log Screen View: " + viewname + " at " + new Date());
    
    var gAIScreenName =  "&cd"; //kGAIScreenName
    var event = GAIDictionaryBuilder.createScreenView().setForKey(viewname, gAIScreenName);
    var builtEvent = event.build();

    if(global.gaTracker)
        GAITracker.prototype.send.call(global.gaTracker, builtEvent);
    else
        console.log("Unable to locate tracker to log view");
}

exports.logEvent = function(data){
    console.log("Analytics Event:" + JSON.stringify(data) + " at " + new Date());
    var event = GAIDictionaryBuilder.createEventWithCategoryActionLabelValue(
      data.category,
      data.action,
      data.label,
      data.value  
    );
    var builtEvent = event.build();
    
    if(global.gaTracker)
        GAITracker.prototype.send.call(global.gaTracker, builtEvent);
    else
        console.log("Unable to locate tracker to log event");
}

exports.logException = function (data) {
    var description = "";
    var fatal = "";
    
    if( typeof data === 'object') {
        description = data.description;
        fatal = (data.fatal) ? data.fatal : false;
    }
    else {
        //not object
        description = data;
        fatal = false;
    }
    
    console.log("Analytics Logging Exception: " + description);

    var event = GAIDictionaryBuilder.createExceptionWithDescriptionWithFatal(description, fatal);
    var builtEvent = event.build();
    
    GAITracker.prototype.send.call(global.gaTracker, builtEvent);
}

exports.logTimingEvent = function(data){
    var event = GAIDictionaryBuilder.createTimingWithCategoryIntervalNameLabel(
      data.category,
      data.value,
      data.name,
      data.label
    );

    var builtEvent = event.build();

    if(global.gaTracker){
        GAITracker.prototype.send.call(global.gaTracker, builtEvent);
        console.log("Analytics Timing Event:" + JSON.stringify(data) + " at " + new Date());
    }
    else
        console.log("Unable to locate tracker to log event");
}

exports.dispatch = function (args){
    console.log("Analytics Flushing dispatch event queue");
    GAI.sharedInstance().dispatch();
};


exports.getTracker = function () {
    return global.gaTracker;
}

