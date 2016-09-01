angular.module('jeu').value('DictionnaireService',
	{
		getRandomMot : function(){
			var list = ['Tartiflette', 'TARTE','Hello','Stagiaire'];
			var index = Math.floor(Math.random() * list.length);
			return list[index];
		}
	});
//
//angular.module('jeu').factory('DictionnaireService',function(myServiceAnnexe){
//			var list;
//			$http.get("dictionnaire.json").success(function(data){
//				list = data
//			}).error(function(){
//				console.warn('erreur lors du chargement')
//			});
//			
//		return {
//			getRandomMot : function(){
//				console.log('list',list);
//			}
//			var index = Math.floor(Math.random() * list.length);
//			return list[index];
//		}
//	}
//});