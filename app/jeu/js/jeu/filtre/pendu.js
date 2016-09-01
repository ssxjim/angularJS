angular.module('jeu').filter('pendu', ['$location' ,function($location){
	return function(input, propositions){
		var lettres = '';
		angular.forEach(input, function(lettre){
			lettre = lettre.toUpperCase();
			if(propositions.indexOf(lettre)==-1){
				lettres += '_';
			} else {
				lettres += lettre;
			}
		});
		return lettres;
	}
}]);