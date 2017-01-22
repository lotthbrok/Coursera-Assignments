(function(){
'use strict';
angular.module('angularJS1',[])
.controller('controller1',function($scope)
{
$scope.lunch = "";
$scope.output = "";
	$scope.lunchCheck = function(){
		var comma = ',';
		var res = splitString($scope.lunch , comma);
		if(res == 0){
		$scope.output = "Please Enter data first";	}
		else
	{	if(res >= 1 && res <= 3)
	$scope.output = "Enjoy!";
	else
	$scope.output = "Too much!";}
			};

		function splitString(string , separator)
		{   
			var array = string.split(separator);
			var length = array.length;
			if(string == "")
		    length = 0;
			return length;
		}
}
);
})();