/**
* @namespace WeVidHere['screen-splash']
* splash screen for the game
*
**/


WeVidHere.screens['screen-splash'] = (function (){


	var firstTime = true, // have we run before?
	 	panel 	  = document.getElementById("screen-splash"), // the visible sub-screen
	 	ui 		  = WeVidHere.ui,
	 	dom		  = ui.dom;

	function init () {
		// common initialization functions
		console.log("in init")

		//bind actions to the splash screen menu items
		var actions = panel.getElementsByTagName('a');
		// loop through the hyperlinks, bind opening a screen to a specific link
		for(var i = 0; i < actions.length; i++){

			// run dom.bind (wraps addEventListener in WeVidHere.ui.dom)
			dom.bind(actions[i], "click", function(e){
				var href = e.target.href;
				console.log("href of current splash-screen hyperlink:" + href);
				href = href.split("#")[1];
				
				// hide the wrapper website for WeVidHere
				ui.hideSite();


				// show the config screen, of information screen, depending on href
				ui.showScreen(href); 

			}); // end of dom.bind

		}// end of loop

	}; // end of init()

	function run (){
		console.log(" HOLY SHEET IM in screen-splash run");
		if (firstTime) {
			init();
		}
	};

	return {
		init:init,
		run:run
	};
})();