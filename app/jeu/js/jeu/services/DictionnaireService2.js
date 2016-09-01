// On veut
   {
   	getRandomMot()
   }


// value()	=> Il n'y a pas besoin d'un autre service
//			=> Il n'y a pas besoin d'initialisation
angular.module('jeu').value('DictionnaireService',{
	getRandomMot : function(){
		var list = ['TARTIFLETTE','TARTE','hello world','Stagiaire'];
		var index = Math.floor(Math.random() * list.length);
		return list[index];
	}
});

// factory() / service()	=> Il y a besoin d'un autre service
//							=> Il n'y a pas besoin d'initialisation
angular.module('jeu').factory('DictionnaireService',function(myServiceAnnexe){
	return {
		getRandomMot : function(){
			myServiceAnnexe.maFonction();
			var list = ['TARTIFLETTE','TARTE','hello world','Stagiaire'];
			var index = Math.floor(Math.random() * list.length);
			return list[index];
		}
	}
});

angular.module('jeu').service('DictionnaireService',DictionnaireService);

function DictionnaireService(myServiceAnnexe){
	this.getRandomMot = function(){
			myServiceAnnexe.maFonction();
			var list = ['TARTIFLETTE','TARTE','hello world','Stagiaire'];
			var index = Math.floor(Math.random() * list.length);
			return list[index];
		}
}

// provider()	=> Il y a besoin (ou pas) d'un autre service
//				=> Il y a besoin d'initialisation
angular.module('jeu').provider('DictionnaireService',function(){
	var list = ['TARTIFLETTE','TARTE','hello world','Stagiaire'];
	return {
		addWord : function(mot){
			list.push(mot);
		},
		$get : function(myServiceAnnexe){
			return {
				getRandomMot : function(){
					myServiceAnnexe.maFonction();
					var index = Math.floor(Math.random() * list.length);
					return list[index];
				}
			}
		}
	}
});
angular.module('jeu').config(function(DictionnaireServiceProvider){
	DictionnaireServiceProvider.addWord('AJOUTER');
});


