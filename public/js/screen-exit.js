/**
* @namespace WeVidHere['screen-exit']
* exit screen for the game
*
**/


WeVidHere.screens['screen-exit'] = (function (){


	var firstTime = true, // have we run before?
	 	panel 	  = null; // the visible sub-screen

	function init () {
		// common initialization functions
		console.log("in init")
	};

	function run (){
		console.log("in screen-exit run");
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