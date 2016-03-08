var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";

if (application.ios) {
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
            var configureError = new NSError();
            GGLContext.sharedInstance().configureWithError(configureError);
            debugger;
            
            var gai = GAI.sharedInstance();
            gai.trackUncaughtExceptions = true;
            
            // Only use this in debug mode
            //gai.logger.logLevel = kGAILogLevelVerbose;
        };
        
        appDelegate.ObjCProtocols = [UIApplicationDelegate];
        return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
}else{
    //ANDROID
}

application.start();
