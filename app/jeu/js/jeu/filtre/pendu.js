
angular.module('jeu')

	.filter('pendu', function() {
		return function (input,propositions){
			console.log(input);
			console.log(propositions);
			
			var lettres = '';
				angular.forEach(input, function(lettre){
					lettre = lettre.toUpperCase();
					if(propositions.indexOf(lettre)==-1){
						lettres += '_' // += concatene
					} else {
						lettres+= lettre;
					}
				});
				return lettres;
			};
		
	
	
	})
    