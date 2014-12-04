/**
* @namespace WeVidHere['screen-game']
* game screen for the game
*
**/


WeVidHere.screens['screen-game'] = (function (){


	var firstTime = true, // have we run before?
	 	panel 	  = null; // the visible sub-screen

	function init () {
		// common initialization functions
		console.log("in init")
	};

	function run (){
		console.log("in screen-game run");
		if (firstTime) {
			init();
		}
		// do our stuff
	};

	return {
		init:init,
		run:run
	};
})();