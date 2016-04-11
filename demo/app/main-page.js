var application = require("application");
var viewModel = require("./main-view-model");
var googleAnalytics = require("nativescript-google-analytics");
var snackbar = require("nativescript-snackbar");
var frameModule = require("ui/frame");
var page;

exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = viewModel;
    
    googleAnalytics.logView("Main-Page");
    //snackbar.simple("Logged view of main-page");
    
    wireEvents();
}

exports.mainActionTap = function(args) {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Main Button"
    });
    showMessage("Primary Tap");
}

exports.secondaryActionTap = function(args) {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Secondary Button"
    });
    frameModule.topmost().navigate("secondary-page")
}

exports.onDispatchQueue = function (args) {
    googleAnalytics.dispatch();
}

function wireEvents(){
    
    page.getViewById("genstureSwipe").on("swipe", function (args) {
        googleAnalytics.logEvent({
            category: "Gestures",
            action: "Swipe",
            label: "Direction: " + args.direction,
            value: args.direction 
        });
        showMessage("Swipe Direction: " + args.direction);
        console.log("Swipe Direction: " + args.direction);
    });
    
   page.getViewById("genstureLongTap").on("longPress", function (args) {
        googleAnalytics.logEvent({
            category: "Gestures",
            action: "Long Press",
            label: "Long press on screen"
        });
        showMessage("Long Press");
        console.log("Long Press");
    });
}

function showMessage(message){
    snackbar.simple(message + " event sent");
}