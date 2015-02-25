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
				//element.addClass('expand');
				//var wrapper =  angular.element("#wrapper");
				element.bind('click',function(event){
					//element.addClass('toggled')
					angular.element(document.getElementById("wrapper")).addClass('toggled')

				});
			}
	   	 };
	}

})();