# Nativescript Google Analytics #

<iframe width="560" height="315" src="https://www.youtube.com/embed/5xIlbvT7j2g" frameborder="0" allowfullscreen></iframe>

## Add Plugin ##
```
tns plugin add nativescript-google-analytics 
```

## Get Config files ##
* [iOS instructions](https://developers.google.com/analytics/devguides/collection/ios/v3/#initialize-analytics-for-your-app)
* [Android instructions](https://developers.google.com/analytics/devguides/collection/android/v4/#add-screen-tracking)
* Click the "Get a Configuration File" instrutctions
* Add the platform specific config file you just downloaded to its respective App_Resources/{platform} folder


## Initalize the tracker in app.js ##
``` js
var application = require("application");
var googleAnalytics = require("nativescript-google-analytics");
application.mainModule = "main-page";
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
            //Module Code to initalize
            googleAnalytics.initalize("UA-74227193-1");
        };
        
        appDelegate.ObjCProtocols = [UIApplicationDelegate];
        return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
}else{
    //ANDROID
    application.on(application.launchEvent, function (args) {
        //Module Code to initalize
        googleAnalytics.initalize("UA-74227193-1");
    });

}

application.start();

```


## Optional Methods ##
### Log Event ###
``` js
// category and action are not optional, label and value are
googleAnalytics.logEvent(
    {
      category: "MyCategory",
      action: "MyAction",
      label: "MyLabel",
      value: 7
    });
```

### Log ScreenView ###
``` js
// category and action are not optional, label and value are
googleAnalytics.logView("Secondary-Page");
```
