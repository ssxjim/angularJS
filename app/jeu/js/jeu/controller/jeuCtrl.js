angular.module('jeu').controller('JeuCtrl', function($scope, DictionnaireService, $timeout){
	
	
	
	var p1 = DictionnaireService.getRandomMot();
	p1.then(function(mot){
		$scope.mot = mot;
	})
	$scope.propositions = [];

	$scope.propose = function(){
		$scope.propositions.push($scope.proposition.toUpperCase());
		$scope.proposition = undefined;
	}

	$scope.getScore = function() {
		var count = 0;
		angular.forEach($scope.propositions, function(lettre){
			lettre = lettre.toUpperCase();
			if($scope.mot.toUpperCase().indexOf(lettre)==-1){
				count++;
			}
		});
		return count;
	}

});