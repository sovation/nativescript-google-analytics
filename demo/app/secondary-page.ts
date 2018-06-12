import * as application from "tns-core-modules/application";
import {Page} from "tns-core-modules/ui/page";
import {Image} from "tns-core-modules/ui/image";
import {topmost} from "tns-core-modules/ui/frame";
import * as googleAnalytics from "nativescript-google-analytics";
import {SnackBar} from "nativescript-snackbar";

let page : Page;

const snackbar = new SnackBar();

exports.pageLoaded = args => {
    page = args.object;

    googleAnalytics.logView("Secondary-Page");
    //snackbar.simple("Logged view of secondary-page");
};

exports.onLogException = args => {
    const message = (application.android) ? "Ergmagerd droid excerpshern" : "Ergmagerd iOS excerpshern";

    const exception: googleAnalytics.LogExceptionOptions = <googleAnalytics.LogExceptionOptions>{
        description: message,
        fatal: false
    };

    googleAnalytics.logException(exception);

    snackbar.simple(message + " Logged");
};

exports.onLogTimingEvent = args => {
    googleAnalytics.startTimer("Logo Timer", {
        category: "Animations",
        name: "Rotate the logo",
        label: (application.ios) ? "iOS" : "Android"
    });


    let logo = page.getViewById("logo") as Image;
    logo.animate({
        rotate: 360,
        duration: 2200,
        delay: 100,
        iterations: 2,
        curve: "easeIn"
    }).then(() => {
        googleAnalytics.stopTimer("Logo Timer");

        snackbar.simple("Logged timed event");
    });
};

exports.goBackClick = args => topmost().goBack();

exports.onDispatchQueue = args => {
    googleAnalytics.dispatch();

    snackbar.simple("Flushing Queue");
};
