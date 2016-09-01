angular.module('jeu').factory('DictionnaireService',function($http){
		
		var serverPromise = $http.get('./js/dictionnaire.json');
		var promise = serverPromise.then(function(response){
			return response.data;
		}, function(){
			console.warn('Erreur lors du chargement du fichier dictionnaire ...');
			return ['TARTIFLETTE'];
		});

		return {
			getRandomMot : function(){
				var p1 = promise.then(function(list){
					var index = Math.floor(Math.random() * list.length);
					return list[index];
				});
				return p1;
			}
		}
	});