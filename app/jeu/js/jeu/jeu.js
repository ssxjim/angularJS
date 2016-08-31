angular.module('jeu', [ 'ngRoute' ]).config(function($routeProvider) {
	
	
	$routeProvider.when('/rencontre', {
		templateUrl : 'html/jeu/rencontre.html',
			controller: 'rencontreCtrl'
	});
	
	$routeProvider.when('/bonjour/:nom', {
		templateUrl : 'html/jeu/bonjour.html',
		controller: 'bonjourCtrl'
	});
	
	$routeProvider.when('/jeu', {
		templateUrl : 'html/jeu/jeu.html',
		controller: 'JeuCtrl'
	});
	
	$routeProvider.when('/jeuNo', {
		templateUrl : 'html/jeu/jeuNo.html',
		controller: 'jeuNoCtrl'
	});
	
	$routeProvider.otherwise({
		redirectTo : '/rencontre'
	});


});
