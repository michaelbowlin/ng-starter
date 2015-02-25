(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('navExposeleft', navExposeleft)

	/* @ngInject */
	function navExposeleft(){
	    return {
			template: 
				'<button type=\"button" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">' +
				    '<span class=\"sr-only\">Toggle navigation</span>' +
				    '<span class=\"icon-bar\"></span>' +
				    '<span class=\"icon-bar\"></span>' +
				    '<span class=\"icon-bar\"></span>' +
				'</button>',			
			restrict: 'E',
			replace: true,
			link: function(scope, element, attrs){
				
				element.bind('click',function(event){
					//element.toggleClass('zindex-1');
					angular.element(document.getElementById("wrapper")).toggleClass('toggled')

				});
			}
	   	 };
	}

})();