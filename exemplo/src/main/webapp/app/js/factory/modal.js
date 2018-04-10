(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('modal', modal);

    modal.$inject = ['$rootScope','$compile'];
	
    /**
     * Factory para abrir um modal.
     */
    function modal($rootScope,$compile) {
    	
    	return {
    		alert		: alert
    		,confirm	: confirm
    		,error		: error
    		,success	: success
    	};
    	
    	/**
    	 * Abre um modal do tipo "Alert"
    	 */
		function alert(mensagem){
			
			var scope 			= $rootScope.$new(true);
			scope.headerClass 	= "warning";
			scope.titulo 		= "Atenção";
			scope.mensagem 		= mensagem;
			scope.btnCancelar 	= true;
			
			show(scope, 500);
		}
		
		/**
    	 * Abre um modal do tipo "Error"
    	 */
		function error(mensagem){
			
			var scope 			= $rootScope.$new(true);
			scope.headerClass 	= "error";
			scope.titulo 		= "Erro";
			scope.mensagem 		= mensagem;
			scope.btnCancelar 	= true;
			
			show(scope, 500);
		}
		
		/**
    	 * Abre um modal do tipo "Success"
    	 */
		function success(mensagem){
			
			var scope 			= $rootScope.$new(true);
			scope.headerClass 	= "success";
			scope.titulo 		= "Sucesso";
			scope.mensagem 		= mensagem;
			scope.btnCancelar 	= true;
			
			show(scope, 500);
		}
		
		/**
    	 * Abre um modal do tipo "Confirm"
    	 */
		function confirm(mensagem,actSim,actNao){
			
			var scope 			= $rootScope.$new(true);
			scope.headerClass 	= "primary";
			scope.titulo 		= "Confirma";
			scope.mensagem 		= mensagem;
			scope.btnConfirm  	= true;
			
			scope.sim = function(){
				try{
					actSim();
				}catch (e) {}
				
				scope.close();
			};
			scope.nao = function(){
				try{
					actNao();
				}catch (e) {}
				
				scope.close();
			};
			
			show(scope, 500);
		}
		
		/**
		 * Abre o modal delegando a criacao e adicionando algumas configuracoes extras
		 */
		function show(scope, width){
			
            return buildModal({
            	templateUrl : './template/modal.html'
            	,scope		: scope	
            	,width		: width
            });
		}
		
		/**
		 * Cria o modal com as configuracoes recebidas.
		 */
		function buildModal(config){
			
			var modal = "<div id='modal'><ng-include src='\""+config.templateUrl+"\"'></ng-include></div><div id='modal_bg'></div>";
						
			$('body').append($compile(modal)(config.scope));
			
			var alturaTela = $(document).height();
		    var larguraTela = $(window).width();
		    
		    var modalMarginLeft = (config.width / 2) * -1;
		    
		    $('#modal_bg').css({'width':larguraTela,'height':alturaTela});
		    $('#modal').css({
		    	'width'			:config.width
		    	,'margin-left'	:modalMarginLeft
		    });
		    
		    config.scope.close = function(){
		    	$('#modal').detach();
		    	$('#modal_bg').detach();
		    };
		    
		    return config.scope;
		}
	};
})();