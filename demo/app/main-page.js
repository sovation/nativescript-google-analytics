var application = require("application");
var viewModel = require("./main-view-model");
var googleAnalytics = require("nativescript-google-analytics");
var page;

exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = viewModel;
    
    googleAnalytics.logView("Main-Page");
    
    wireEvents();
}

exports.mainActionTap = function(args) {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Main Button"
    });
}

exports.secondaryActionTap = function(args) {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Secondary Button"
    });
}


function wireEvents(){
    page.on("swipe", function (args) {
        googleAnalytics.logEvent({
            category: "Gestures",
            action: "Swipe",
            label: "Trying to scroll " + (args.direction === 4) ? "down" : "up",
            value: args.direction 
        });
        console.log("Swipe Direction: " + args.direction);
    });
    
   page.on("longPress", function (args) {
        googleAnalytics.logEvent({
            category: "Gestures",
            action: "Long Press",
            label: "Long press on screen"
        });
        console.log("Long Press");
    });
}