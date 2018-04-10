(function() {
	'use strict';
	angular.module(WEB_APP).controller('acessoNegadoController',acessoNegadoController);
	
	acessoNegadoController.$inject = 
		['$scope','$stateParams'];
	
	function acessoNegadoController($scope,$stateParams){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		vm.msg = '';
		
		//funcoes publicas
		
		init();
		
		function init(){
			vm.msg = $stateParams.msg;
		}
	};
})();