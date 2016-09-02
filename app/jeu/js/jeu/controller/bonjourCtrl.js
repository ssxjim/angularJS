angular.module('jeu').
controller('bonjourCtrl', function($scope, $routeParams, $location){
	
	$scope.recupNom = $routeParams.nom;
	
	$scope.yes = function(){
		$location.url("/jeu/"); 
	}	
	
	$scope.no = function(){
		$location.url("/jeuNo/"); 
	}	

	
	
});