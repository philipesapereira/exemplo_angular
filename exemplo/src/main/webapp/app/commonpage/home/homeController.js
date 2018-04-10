(function() {
	'use strict';
	angular.module(WEB_APP).controller('homeController',homeController);
	
	homeController.$inject = 
		['$scope','seguranca'];
	
	function homeController($scope,seguranca){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		
		//funcoes publicas
		
		init();
		
		function init(){
			seguranca.getRecursos();
		}
	};
})();