var application = require("application");
var viewModel = require("./main-view-model");
var googleAnalytics = require("nativescript-google-analytics");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
    
    if (application.android) {
        googleAnalytics.initalize("UA-74227193-1");
    }
    
}
exports.pageLoaded = pageLoaded;

function tapAction(args) {
    googleAnalytics.logEvent("MyCategory", "MyAction", "MyLabel", "MyValue");
}

exports.tapAction = tapAction;