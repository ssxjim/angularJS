angular
	.module('myApp', [])
	.controller('CommandeCtrl', function($scope){
		
		var big=100;

		$scope.commandes=[{
			ref : "azerty",
			label : "label Azerty",
			prix :12.6,
			quantite : 0
		},{
			ref : "toto",
			label : "label toto",
			prix :40,
			quantite : 0
		},{
			ref : "mama",
			label : "label mama",
			prix :4.5,
			quantite : 0
		}];
		
		$scope.getHT= function(commande){
			return commande.quantite*commande.prix;
		}
		$scope.getTTC= function(commande){
			return $scope.getHT(commande)*1.2
		}
		
		$scope.totalHT=function(){
			var count = 0;
			angular.forEach($scope.commandes, function(commande)
			{
				count += $scope.getHT(commande);
			});

			return count;
		}
		
		$scope.totalTTC=function(){
			var count = 0;
			angular.forEach($scope.commandes, function(commande)
			{
				count += $scope.getTTC(commande);
			});

			return count;
		}
		
		$scope.getBigTTC = function(){
			return big;
		}
		
		
		$scope.addCommande = function(){
			var adding = angular.copy($scope.toAdd);
			adding.quantite = 1;
			$scope.commandes.push(adding);
			$scope.toAdd = undefined;
		}
		
		$scope.removeCommande = function($index){
			$scope.commandes.splice($index,1);
		}
		
//		$scope.catalogue = []{
//		
//				$http.get(urlCataglogue).then(function(response){ // partie ajax ajout de donnée apres le chargement de la page
//					$scope.catalogue = response.data; // maj d'une partie d ela page
//				})
//		}
//		
//		$scope.AddCommandeCatalogue = function(){
//			var adding2 = {};
//			adding2.ref = $scope.toAddCatalogue.article.['ISBN-13'];
//			adding2.label = $scope.toAddCatalogue.article.title;
//			adding2.prix = $scope.toAddCatalogue.article.prix;
//			adding2.quantite = $scope.toAddCatalogue.article.quantite;
//			$scope.commandes.push(adding2);
//			$scope.toAddCatalogue =  undefined;
//		}
		
		
});