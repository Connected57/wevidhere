
/**
 *@namespace WeVidHere
 */
window.WeVidHere = (window.WeVidHere || (function() {
    
    var firstTime = true;
    /**
     *@enum config
     */
    var constants = {
        TRUE:"true",
        FALSE:"false"
    };

    var screens = []; // links each visible
    
    /**
     *@enum features
     *We create it her, but set it outside of
     *WeVidHere inModernizr tests and polyfill loads
     */
    
    var features = {
        num:0
    };

    /*
    * @method standAlone
    * determine if we are fullscreen, or running inside
    * safari or android browser on mobile devices. Doing this
    * lets us give users the option to save our app to their desktop
    * @return {Boolean} if we are standAlone, return true, else false
    */
    function standAlone(){

        //TODO: Do the actual test here, returning 'true' for desktop appps
        return true;
    }
    
    /**
	 * @method ready
	 * create a function similar to that used in jQuery  
	 * that fires after the HTML is parsed, but before 
	 * images and other assets are downloaded
	 * @link http://dustindiaz.com/smallest-domready-ever
	 * other examples
	 * @link https://jonlabelle.com/snippets/view/javascript/cross-browser-document-ready
	 * @link https://gist.github.com/esfand/10058175
	 * @link https://gist.github.com/dciccale/4087856
	 * @param {Function} fn function to call when DOM is loaded
	 * @returns {Boolean} if dom is ready, return true, else false
	 */
	function ready () {
		console.log("in WeVidHere.ready, features:" + features);
		/in/.test(document.readyState)?setTimeout(function(){ready()}, 9):run();
	};

    function init(){
        console.log("in init");
        if(firstTime){
            // load default files
            Modernizr.load({
                load: [
                    'js/ui.js',                  
                    'js/screen-splash.js',
                    'js/screen-install.js',
                    'js/screen-config.js',
                    'js/screen-game.js',
                    'js/screen-help.js',
                    'js/screen-reviews.js',
                    'js/screen-exit.js'

                ],
                complete: function(){

                    // polyfills tests and load
                    Modernizr.load(
                        [
                            {
                                test: window.JSON,
                                nope: 'js/lib/json3.min.js', // load polyfill
                                complete: function(){
                                    console.log("JSON loaded");
                                } // end callback for second test
                            }, // end of first test
                            {
                                test: Modernizr.localstorage,
                                nope: 'js/lib/localstorage.js', // load polyfill
                                complete: function(){
                                    console.log("localstorage loaded");
                                } // end callback for second test
                            }// end of second test
                        ] // end of array of tests
                    ); // end of second Modernizer.load();
                    ready(); // run our DOMREADY test, then run();
                } // end of complete for first Modernizer
            }); // end of first Modernizr
           
            firstTime = false;
        } // end of 'firstTime'        

    }; // end of init();
    
    function run () {
        console.log("WeVidHere::run() starting");

        //load the correcte scerren, setting classes and properties correctly
        var ui = WeVidHere.ui;

        var dom = ui.dom;
        //users should see either a splash screen, or an install screen
        if(standAlone()){
            ui.showScreen('screen-splash');
            console.log("in screen-splash");
        } else { 
            ui.showScreen('screen-install'); //TODO: write screen-install, following HTML5 Games
        }
       
       /*
        //UNIT TEST: 
       var splasher = document.getElementById("screen-splash");
       dom.bind(splasher, "click", function(){ 
            alert("hi there");
            }
        );
        */

    }//end run
    
    return {
        
        init:init,
        run:run,
        screens:screens
        
    };
    
    
}))();
// object created, fire its 'init' function
WeVidHere.init();





