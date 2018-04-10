(function() {
	'use strict';
	angular.module(EXEMPLO_MODULE)
	.controller('exemploTesteDetalheCtrl',exemploTesteDetalheCtrl);
	
	exemploTesteDetalheCtrl.$inject = 
		['$scope','$rootScope','seguranca','http'];
	
	function exemploTesteDetalheCtrl($scope,$rootScope,seguranca,http){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		vm.teste = 'ola';
		
		//funcoes publicas
		
		init();
		
		function init(){
			seguranca.getRecursos('001');
			
			http.GET('/exemplo/teste').then(function(response) {
				
				vm.teste = response;
				
			});
			
			
			
		}
	};
})();