/*
More SplashScreen ©BSoft&Co 2012
--------------------------------
v0.9 beta
*/

var moreSplash = function(tabGroupObj) {
    var welcomeWindow = Titanium.UI.createWindow();
    var defaultImage = Titanium.UI.createImageView({
        image:'Default.png'
    });
     
    welcomeWindow.add(defaultImage);
    welcomeWindow.open({fullscreen:true});
//    Ti.App.fireEvent('show_indicator',{message:'Loading User Interface...'});

    // here you can add an activity indicator or everything you want

    // register a listenner to close the splashscreen 
    welcomeWindow.addEventListener('CloseMe', function(e) {
        // close the activity indicator if needed
//        Ti.App.fireEvent('hide_indicator');
        welcomeWindow.close({opacity:0,duration:1000}, function() {
            tabGroupObj.setActiveTab(0);
            welcomeWindow.remove(defaultImage);
            defaultImage = null;            
            welcomeWindow = null;
        });
        tabGroupObj.animate({opacity:1,duration:1000});
    });
    // set a low opacity to the tabgroup, nicer to make it appears after
    tabGroupObj.setOpacity(0.01); 

    // ----------------------------------------------------------------------------
    // To load all your tabGroup before your application is open, fire an 
    // event : Titanium.App.fireEvent('tabCharged'); at the bottom of each windows 
    // added or when all your user interface elements are created.
    // ----------------------------------------------------------------------------

    var tabNum = tabGroupObj.getTabs().length - 1;; // number of tabs (+1) to load
    tabGroupObj.setActiveTab(tabNum);
    Titanium.App.addEventListener('tabCharged', function(e){
        Ti.API.info("tabCharged event receive");
        tabNum--;
//        setTimeout(function() { 
            tabGroupObj.setActiveTab(tabNum);
            if (tabNum === 0) { 
                tabNum = null; 
                Titanium.App.removeEventListener('tabCharged',function(){});
                welcomeWindow.fireEvent('CloseMe');
            }
//        },250);
    });
};
