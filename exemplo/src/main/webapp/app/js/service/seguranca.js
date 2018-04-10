(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .service('seguranca', seguranca);

    seguranca.$inject = ['$q','http'];
	
    function seguranca($q,http) {
    	
    	/* jshint validthis: true */
    	var self = this;

    	//variaveis
    	var usuario = null;
    	
    	//funcoes publicas
    	self.getUsuario = getUsuario;
    	self.getRecursos = getRecursos;
    	
    	function getRecursos(processo){
    		var deferred = $q.defer();

    		//construir o webservice 
    		
    		deferred.resolve(['MANTEM']);
    		
    		return deferred.promise;
    	}
    	
    	function getUsuario(){
    		if(null != atualizaUsuario()){
    			return usuario;
    		}
    		
    	}
    	
    	function atualizaUsuario(){
    		
    		var url = window.location.href;
    		var params = null;

    		if(url.indexOf("?") !== -1){
    			url = url.split("?")[1];
    			
    			var keyPair = url.split("&");
    			params = [];
    			
    			keyPair.forEach(function(keyPair){
					keyPair = keyPair.split("=");
					params[decodeURIComponent(keyPair[0])] = decodeURIComponent(keyPair[1]) || '';
				});
			}
    		
//    		localStorage.setItem(USUARIO_LOGADO,'');
    		
    		if(null != params && params['SGR_CERTIFICACAO']){
    			
    			usuario = {
					certificacao	 			: params['SGR_CERTIFICACAO'] 					
					,unidade 					: params['SGR_UNIDADE'] 						
					,tipoCredencial		 		: params['SGR_TIPO_CREDENCIAL'] 				
					,codigoCredencial	 		: params['SGR_CODIGO_CREDENCIAL']			
					,siglaUsuario	 			: params['SGR_SIGLA_USUARIO'] 				
					,nomeUsuario	 			: params['SGR_NOME_USUARIO'] 				
					,tipoAmbiente	 			: params['SGR_TIPO_AMBIENTE'] 				
					,siglaAmbiente		 		: params['SGR_SIGLA_AMBIENTE'] 				
					,tipoEmpresa	 			: params['SGR_TIPO_EMPRESA'] 				
					,tipoEntidade	 			: params['SGR_TIPO_ENTIDADE'] 				
					,tipoIdentificadorEntidade	: params['SGR_TIPO_IDENTIFICADOR_ENTIDADE'] 	
					,identificadorEmpresa	 	: params['SGR_IDENTIFICADOR_EMPRESA'] 		
					,identificadorEntidade	 	: params['SGR_IDENTIFICADOR_ENTIDADE'] 		
					,executavel 				: params['SGR_EXECUTAVEL'] 					
					,nivelAcesso 				: params['SGR_NIVEL_ACESSO'] 				
					,nivelAutenticacao	 		: params['SGR_NIVEL_AUTENTICACAO'] 			
					,sistema 					: params['SGR_SISTEMA'] 						
					,processo 					: params['SGR_PROCESSO'] 					
					,paramPrivado 				: params['SGR_PARAMPRIVADO'] 				
					,estagioAmbiente 			: params['SGR_ESTAGIO_AMBIENTE'] 			
					,ip 						: params['SGR_IP'] 							
					,estacao 					: params['SGR_ESTACAO']
    			};
    			
    			sessionStorage.setItem(USUARIO_LOGADO,JSON.stringify(usuario));
    			return usuario;
    		}
    		
    	}
    	
    };
})();