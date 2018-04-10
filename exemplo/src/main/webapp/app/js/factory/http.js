(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('http', http);

    http.$inject = ['$q','$location','processing','mensagem'];
	
    function http($q,$location,processing,mensagem) {
    
    	return {
    		GET: function(url, data, callback) {
    			ws('GET', url, data, callback);
    		},
    		POST: function(url, data, callback) {
    			ws('POST', url, data, callback);
    		},
    		PUT: function(url, data, callback) {
    			ws('PUT', url, data, callback);
    		},
    		DELETE: function(url, data, callback) {
    			ws('DELETE', url, data, callback);
    		}
    	};
    	
    	function ws(method, url, data, callback) {
            
    		var tratamentoResposta = {
            	
				200 : function (response,a,b) {
					if(method == 'POST'){
    					mensagem.success('Incluído com sucesso!');
    				}else if(method == 'PUT'){
    					mensagem.success('Alterado com sucesso!');
    				}if(method == 'DELETE'){
    					mensagem.success('Excluído com sucesso!');
    				}
				}
	    		,204 : function (response) {
	    			mensagem.alert('Lista vazia.');
				}
				,400 : function (response) {
					mensagem.error('Formulário inválido.');
				}
	    		,401 : function (response) {
	    			$location.path('/acessoNegado/' + response.responseText);
				}
	        	,404 : function (response) {
	        		if(undefined != response.responseJSON){
	        			
	        			mensagem.error(response.responseJSON);
	        		}else {
	        			mensagem.error("Recurso solicitado não encontrado.");
	        		}
	        	}
    		};
    		
    		call(method, url, data, tratamentoResposta).then(function(data) {
    			callback(data);
			},function(errorThrown){
				console.log(errorThrown);
			});
        };
        
        function call(method, url, data, tratamentoResposta){
        	
        	var deferred = $q.defer();
        	
        	$.ajax({
                type			: method
                ,url			: ENDPOINT + url
                ,contentType	: 'application/json'
                ,dataType		: 'json'
                ,headers 		: {'usuario_sgr': sessionStorage.getItem(USUARIO_LOGADO) || ' '}
                ,data			: data
                ,beforeSend		: function() {processing.start();}
                ,statusCode		: tratamentoResposta
                	 
            }).done(function(data,textStatus,jqXHR) {
            	
            	deferred.resolve(data);
            	
            }).fail(function( jqXHR, textStatus, errorThrown ) {
            	
            	deferred.reject(errorThrown);
            	
            }).always(function() {
            	processing.stop();
            });
        	
        	return deferred.promise;
        }
        
    };
})();