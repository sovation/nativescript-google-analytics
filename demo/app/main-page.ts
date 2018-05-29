import * as application from "tns-core-modules/application";
import { MainViewModel } from "./main-view-model";
var googleAnalytics = require("nativescript-google-analytics");
import { GestureTypes, SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import * as snackbarModule from "nativescript-snackbar";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";

let page: Frame;

let snackbar = new snackbarModule.SnackBar();

exports.pageLoaded = function (args) {
    debugger;
    page = args.object as Frame;
    page.bindingContext = new MainViewModel();

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
    
    const topmostFrame: Frame = topmost();
    topmostFrame.navigate("secondary-page");
}

exports.onDispatchQueue = function (args) {
    googleAnalytics.dispatch();
}

function wireEvents(){

    page.getViewById("genstureSwipe").on("swipe", function (args: SwipeGestureEventData) {
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

function showMessage(message) {
    snackbar.simple(message).then(args => {
        console.log(JSON.stringify(args));
    });
}