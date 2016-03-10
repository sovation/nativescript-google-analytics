var application = require("application");
var viewModel = require("./main-view-model");
var googleAnalytics = require("nativescript-google-analytics");
var frameModule = require("ui/frame");
var snackbar = require("nativescript-snackbar");
var page;

exports.pageLoaded = function(args) {
    page = args.object;
    
    
    googleAnalytics.logView("Secondary-Page");
    snackbar.simple("Logged view of secondary-page");
}

exports.goBackClick = function(args) {
  frameModule.topmost().goBack();
}
