import {MainViewModel} from "./main-view-model";
import {SwipeGestureEventData} from "tns-core-modules/ui/gestures";
import {Frame, topmost} from "tns-core-modules/ui/frame";
import {SnackBar} from "nativescript-snackbar";
import * as googleAnalytics from "nativescript-google-analytics";

let page: Frame;

const snackbar = new SnackBar();

exports.pageLoaded = function (args) {
    debugger;
    page = args.object as Frame;
    page.bindingContext = new MainViewModel();

    googleAnalytics.logView("Main-Page");
    //snackbar.simple("Logged view of main-page");

    wireEvents();
};

exports.mainActionTap = args => {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Main Button"
    });
    showMessage("Primary Tap");
};

exports.secondaryActionTap = args => {
    googleAnalytics.logEvent({
      category: "Basic Actions",
      action: "Click",
      label: "Secondary Button"
    });

    const topmostFrame: Frame = topmost();
    topmostFrame.navigate("secondary-page");
};

exports.onDispatchQueue = args => {
    snackbar.simple("Flushing Queue");

    googleAnalytics.dispatch();
};

function wireEvents(){

    page.getViewById("genstureSwipe").on("swipe", (args: SwipeGestureEventData) => {
        googleAnalytics.logEvent({
            category: "Gestures",
            action: "Swipe",
            label: "Direction: " + args.direction,
            value: args.direction
        });
        showMessage("Swipe Direction: " + args.direction);
        console.log("Swipe Direction: " + args.direction);
    });

   page.getViewById("genstureLongTap").on("longPress", args => {
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
