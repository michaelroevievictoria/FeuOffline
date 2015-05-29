
(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #lrt */
    $(document).on("click", "#lr.html", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #lrt */
    $(document).on("click", "#lrt", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
app.hideSplashScreen = function() {
    "use strict" ;

    // see https://github.com/01org/appframework/blob/master/documentation/detail/%24.ui.launch.md
    // Do the following if you disabled App Framework autolaunch (in index.html, for example)
    // $.ui.launch() ;

    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.hideSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.hideSplashScreen() ;
    }
} ;