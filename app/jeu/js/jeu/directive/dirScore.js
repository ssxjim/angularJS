angular.module('jeu').directive('myScore', function(){
	return function(scope, element, attrs) { // partie Link
		scope.$watch(attrs.myScore, function (value) {
			element.removeClass('PERFECT');
			element.removeClass('OUPS');
			element.removeClass('LOOSER');
			console.log(value);
			if(value==undefined) element.text('');
			else if(value==0){
				element.addClass('PERFECT');
				element.text('PERFECT');
			}
			else if((value=>1)&&(value<5)){
				element.addClass('OUPS');
				element.text('OUPS');
			}
		
			else {
				element.addClass('LOOSER');
				element.text('LOOSER');
			}
		});
	} 
});