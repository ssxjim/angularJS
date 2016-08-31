

angular.module('jeu').controller('JeuCtrl', function($scope){
	
	$scope.mot = "TARTIFLETTE";
	$scope.propositions = [];


	$scope.propose = function(){
		propositions.push($scope.proposition.toUpperCase());
		$scope.proposition = undefined;
		updateLettres();
	}

	$scope.getScore = function() {
		var count = 0;
		angular.forEach(propositions, function(lettre){
			lettre = lettre.toUpperCase();
			if(mot.toUpperCase().indexOf(lettre)==-1){
				count++;
			}
		});
		return count;
	}

});