var application = require("application");
var viewModel = require("./main-view-model");
var googleAnalytics = require("nativescript-google-analytics");
var frameModule = require("ui/frame");
var snackbarModule = require("nativescript-snackbar");
var page;

var snackbar = new snackbarModule.SnackBar();

exports.pageLoaded = function(args) {
    page = args.object;
    
    
    googleAnalytics.logView("Secondary-Page");
    //snackbar.simple("Logged view of secondary-page");
}

exports.onLogException = function (args) {
    /*
    googleAnalytics.logException({
        description: "Fat Fingered it...",
        fatal: true
    });
    */
    var message = "Ergmagerd iOS excerpshern";
    
    if(application.android)
        message = "Ergmagerd droid excerpshern";
    
    googleAnalytics.logException(message);
    snackbar.simple(message + " Logged");
}

exports.onLogTimingEvent = function (args) {
   googleAnalytics.startTimer("Logo Timer", {
                                    category: "Animations",
                                    name: "Rotate the logo",
                                    label: (application.ios) ? "iOS" : "Android"
                                });
   
   
   var logo = page.getViewById("logo");
   logo.animate({
        rotate: 360,
        duration: 2200,
        delay: 100,
        iterations: 2,
        curve: "easeIn"
    })
    .then(function () {
        googleAnalytics.stopTimer("Logo Timer");
        
        snackbar.simple("Logged timed event");
    });
}

exports.goBackClick = function(args) {
  frameModule.topmost().goBack();
}

exports.onDispatchQueue = function (args) {
    googleAnalytics.dispatch();
}