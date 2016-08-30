describe('CommandeCtrl',function(){

	var ctrl,scope;

	beforeEach(function(){
		module('myApp');
		inject(function($controller,$rootScope){
			scope=$rootScope.$new();
			ctrl=$controller('CommandeCtrl',{'$scope':scope});
		});
	});
	
	describe('doit initialiser le premier element avec ', function(){
		it('la reférence "AZERTY"',function(){ 	
			expect(scope.commandes[0].ref).toEqual('azerty');
		});
		it('le prix 12.6 AZERTY"',function(){ 	
			expect(scope.commandes[0].prix).toEqual(12.6);
		});
	});
});
	