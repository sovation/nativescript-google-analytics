var application = require("application");
var googleAnalytics = require("nativescript-google-analytics");
//application.mainModule = "main-page";
application.mainModule = "secondary-page";
application.cssFile = "./app.css";

if (application.ios) {
    //IOS
    var __extends = this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };
    
    var appDelegate = (function (_super) {
        __extends(appDelegate, _super);
        function appDelegate() {
            _super.apply(this, arguments);
        }
        
        appDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
            initAnalytics(); //Module Code to initalize
        };
        
        appDelegate.ObjCProtocols = [UIApplicationDelegate];
        return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
}else{
    //ANDROID
    application.on(application.launchEvent, function (args) {
        initAnalytics(); //Module Code to initalize
    });

}

application.start();

function initAnalytics(){
    googleAnalytics.initalize({
                trackingId: "UA-74227193-1",
                dispatchInterval: 5,
                logging: true
            });
}