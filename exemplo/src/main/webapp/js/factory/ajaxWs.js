(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('ajaxWs', ajaxWs);

    ajaxWs.$inject = ['$rootScope','processing'];
	
    function ajaxWs($rootScope,processing) {
    
	
        var ws = function(method, url, data) {
            
//        	$.ajaxSetup({
//        	    headers: {
//        	        'usuarioLogado': JSON.stringify($rootScope.usuarioAtual)
//        	    }
//        	});
        	
        	return $.ajax({
                type: method,
                url: url,
                contentType: 'application/json',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                	processing.start();
                  }
            }).always(function() {
            	processing.stop();
            });
        	
        };
        
        return {
            GET: function(url) {
                return ws('GET', url);
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
    };
})();