
angular.module('jeu')

	.filter('bijour', function() {
		return function(input) {
		 console.log(input);
		
		 return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
		
			
	
		}
	
	})
    