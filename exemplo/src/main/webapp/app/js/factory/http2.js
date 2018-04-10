(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('http', http);

    http.$inject = ['$http','$q','processing','$location','mensagem'];
	
    function http($http,$q,processing,$location,mensagem) {
    
    	return {
            GET: function(url, data) {
                return ws('GET', url, data);
            },
            POST: function(url, data) {
                return ws('POST', url, data);
            },
            PUT: function(url, data) {
                return ws('PUT', url, data);
            },
            DELETE: function(url, data) {
                return ws('DELETE', url, data);
            }
        };
    	
        function ws(method, url, data) {
            
        	var headers = {
    			'Content-Type' : 'application/json'
				,'usuario_sgr' : sessionStorage.getItem(USUARIO_LOGADO) || ''
        	};
        	
        	console.log(headers);
        	
        	var deferred = $q.defer();
        	
        	$http({
        		method 				: method
                ,url				: ENDPOINT + url
                ,headers 			: {'usuario_sgr' : sessionStorage.getItem(USUARIO_LOGADO) || 'a'}
                ,data				: data
                ,transformRequest	: transformRequest()
//                ,transformResponse	: transformResponse()
                
        	}).then(function(response) {
        		
        		switch (response.status) {
    			case 200:
    				if(response.config.method !== 'GET'){
    					mensagem.success('Executado com sucesso!!');
    				}
    				
    				break;
    			case 204:
    				
    				mensagem.alert('Lista vazia');
    				break;
    			}
        		processing.stop();
        		deferred.resolve(response.data);
        		
        	},function (response){
            	
        		console.log(response);
        		
        		switch (response.status) {
    			case 401:
    				$location.path('/acessoNegado/' + response.statusTexta);
    				break;
    			case 400:
    				mensagem.error('Formulario mal preenchido');
    				break;
    			case 404:
    				mensagem.error('Recurso não encontrado');
    				break;

    			}
        		processing.stop();
        		deferred.reject(response);
        	});
        	
        	return deferred.promise;
        };
        
        function transformRequest(){
        	return $http.defaults.transformRequest.concat(function() {
            	processing.start();
            });
        }
        
//        function transformResponse(){
//        	return $http.defaults.transformResponse.concat(function(response) {
//        		console.log(response.status);
//        		processing.stop();
//            	return response;
//            });
//        }
        
    };
    
})();