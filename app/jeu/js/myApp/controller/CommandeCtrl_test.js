
describe('CommandeCtrl',function(){
	var ctrl,scope;
	
	beforeEach(function(){
		module('myApp');
		inject(function($controller,$rootScope){
			scope=$rootScope.$new();
			ctrl=$controller('CommandeCtrl',{'$scope':scope});
		});
	});

	describe('doit initialiser le premier élément avec ', function(){
		it('la référence "azerty"', function(){
			expect(scope.commandes[0].ref).toEqual('azerty');
		});

		it('le prix 14,5', function(){
			expect(scope.commandes[0].prix).toEqual(14.5);
		});
	})

	it('doit initialiser la liste des commandes à 3 éléments',function(){
		expect(scope.commandes.length).toEqual(3);
	});empty

	it('doit avoir une fonction de calcul de HT',function(){
		expect(scope.getHT).toBeDefined();
		expect(scope.getHT({prix:10,quantite:20})).toEqual(200);
	});

	it('doit avoir une fonction de calcul de TTC',function(){
		expect(scope.getTTC).toBeDefined();
		expect(scope.getTTC({prix:10,quantite:20})).toEqual(240);
	});

});