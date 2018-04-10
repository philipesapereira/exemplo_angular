(function() {
	'use strict';
	angular.module(EXEMPLO_MODULE)
	.controller('exemploTesteConsultaCtrl',exemploTesteConsultaCtrl);
	
	exemploTesteConsultaCtrl.$inject = 
		['$scope','$rootScope','exemploTesteService'];
	
	function exemploTesteConsultaCtrl($scope,$rootScope,exemploTesteService){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		vm.recursos = [];
		vm.selectedItem = null;
		vm.paginacaoContainer = exemploTesteService.paginacaoContainer;
		
		//funcoes publicas
		vm.listarTestes = listarTestes;
		vm.selectItem = selectItem;
		
		/* INIT */
		(function(){
			exemploTesteService.getRecursos(function(data){
				vm.recursos = data;
			});
//			listarTestes();
		})();
		
		function listarTestes(numeroPagina){
			
			if(numeroPagina){
				vm.paginacaoContainer.numeroPagina = numeroPagina;
			}
			
			var pagRequest = {
				numeroPagina 	: vm.paginacaoContainer.numeroPagina
				,itensPorPagina : vm.paginacaoContainer.itensPorPagina	
				,nome 			: vm.paginacaoContainer.filtro.nome
				,sobreNome 		: vm.paginacaoContainer.filtro.sobreNome
			};
			
			exemploTesteService.listarTestes(pagRequest,function(data) {
				vm.paginacaoContainer.lista 		= data.lista;
				vm.paginacaoContainer.totalItens 	= data.totalItens;
			});
		}
		
		
		function selectItem(item){
			vm.selectedItem = vm.selectedItem != item ? item : null;
		}
	};
})();