angular.module('jeu').controller('rencontreCtrl', function($scope, $location){
	
	
	$scope.ok = function(){
		if($scope.myForm.$valid){
			$location.url("/bonjour/" + $scope.user); //ng model de user sur le html, pas de bonjour.js
		}
	}	
	
	
//	$scope.toUpper(str)=function(){
//		return str.toUppercase()
//	}
	
});


