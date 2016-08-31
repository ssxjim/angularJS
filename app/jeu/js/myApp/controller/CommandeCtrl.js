angular
	// Charge le module "sub1App"
	.module('myApp')
	// Crée le controler "CommandeCtrl" sur le module "sub1App"
	.controller('CommandeCtrl', function($scope, $http){

		var tva = 1.2;
		var big = 1000;
		var urlCatalogue = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

		$scope.commandes = [{
			ref : 'azerty',
			label : 'Label de Azerty',
			prix : 14.5,
			quantite : 0
		},{
			ref : 'qsdfgh',
			label : 'Label de Qsdfgh',
			prix : 13.75,
			quantite : 0
		},{
			ref : 'wxcvbn',
			label : 'Label de Wxcvbn',
			prix : 26,
			quantite : 0
		}];

		$scope.getHT = function(commande){
			return commande.quantite * commande.prix;
		};

		$scope.getTTC = function(commande){
			return $scope.getHT(commande) * tva;
		};

		$scope.getTotalHT = function(){
			var response = 0;
			angular.forEach($scope.commandes, function(commande){
				response += $scope.getHT(commande);
			});
			return response;
		};

		$scope.getTotalTTC = function(){
			var response = 0;
			angular.forEach($scope.commandes, function(commande){
				response += $scope.getTTC(commande);
			});
			return response;
		};

		$scope.getBigTTC = function(){
			return big;
		};

		$scope.addCommande = function(){
			var adding = angular.copy($scope.toAdd);
			adding.quantite = 1;
			$scope.commandes.push(adding);
			$scope.toAdd = undefined;
		};

		$scope.removeCommande = function($index){
			$scope.commandes.splice($index,1);
		};

		$scope.catalogue = [];
		$http.get(urlCatalogue).then(function(response){
			$scope.catalogue = response.data;
		});

		$scope.addCommandeCatalogue = function(){
			var adding = {};
			adding.ref = $scope.toAddCatalogue.article['ISBN-13'];
			adding.label = $scope.toAddCatalogue.article.title;
			adding.prix = $scope.toAddCatalogue.article.price;
			adding.quantite = $scope.toAddCatalogue.quantite;
			$scope.commandes.push(adding);
			$scope.toAddCatalogue = undefined;
		}

	});

