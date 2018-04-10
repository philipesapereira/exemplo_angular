(function() {
	'use strict';
	angular.module(WEB_APP).controller('dashboardCtrl',dashboardCtrl);
	
	dashboardCtrl.$inject = 
		['$scope','$rootScope','$location','$routeParams','$timeout','ajaxWs','modal'];
	
	function dashboardCtrl($scope,$rootScope,$location,$routeParams,$timeout,ajaxWs,modal){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		vm.usuario = {
			login : ""
			,senha: ""
		};
		
		//funcoes publicas
		vm.login 	= login;
		vm.logoff	= logoff; 
		
		iniciar();
		
		function iniciar(){
			console.log("dashboardCtrl.init()");
			testeGet();
		}
		
		function testeGet(){
			
			ajaxWs.GET(ENDPOINT+"/dashboard/teste?nome=teste")
	      	
			.then(function(response) {
	      		
	      		if(response.codErro === 0){
	      			
	      			console.log(response.data);
	      			
	      		}else {
	      			modal.error(response.msg);
	      		}
	      		
	      		$timeout(function(){
	    			$scope.$apply();
	    		});
	      	}
	      	,function(xhr, status, err) {
	      		modal.error(err);
	  		});
			
		}
		
		function login(){
			
			ajaxWs.POST(ENDPOINT+"/autenticacao/login", JSON.stringify(vm.usuario))
	      	
			.then(function(response) {
	      		
	      		if(response.codErro === 0){
	      			
	      			sessionStorage.setItem(USUARIO_LOGADO,JSON.stringify(response.data));
	      			$location.path('/');
	      			
	      		}else if(response.codErro === 400){
	      			
	      			var msg = "";
	      			var erros = response.erros;
	      			
	      			erros.forEach(function(valor, chave){
	      				msg = msg + valor + '<br />';
	      			});
	      			
	      			modal.error(msg);
	      			
	      		}else {
	      			modal.error(response.msg);
	      		}
	      		
	      		$timeout(function(){
	    			$scope.$apply();
	    		});
	      	}
	      	,function(xhr, status, err) {
	      		modal.error(err);
	  		});
			
		}
		
		function logoff(){
			
			ajaxWs.DELETE(ENDPOINT+"/autenticacao/logoff", JSON.stringify($rootScope.usuarioLogado))
	      	
			.then(function(response) {
	      		
	      		if(response.codErro === 0){
	      			sessionStorage.setItem(USUARIO_LOGADO,null);
	      			$location.path('/login');
	      			
	      		}else {
	      			modal.error(response.msg);
	      		}
	      		
	      		$timeout(function(){
	    			$scope.$apply();
	    		});
	      	}
	      	,function(xhr, status, err) {
	      		modal.error(err);
	  		});
			
		}
		
	};
})();