/*
*@ namespace ag-controllers.js
*/
console.log("top of ag-controllers.js");

var WeVidHereConfig = angular.module('WeVidHere',[]);

WeVidHereConfig.controller (
	'WeVidHereConfig', 
	['$scope', // the object we attach everything to
	'$http',   // imported Ajax object, injected into our controller
		function ($scope, $http){
			console.log("help me spock");
			//get data by Ajax

			/* $http(
				method: "GET",
				url:     "data/users.json"

			)
			.success(function (data, status, headers, config){
				//do something if we got the data
				}
			); */
			// check data on submit form
			$scope.doLogin = function(){
				// process what user typed in

			}

		}

    ]
);