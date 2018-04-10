(function() {
    'use strict';
    
    angular
    .module(EXEMPLO_MODULE)
    .service('exemploTesteService', exemploTesteService);

    exemploTesteService.$inject = ['http','seguranca'];
	
    function exemploTesteService(http,seguranca) {

		/* jshint validthis: true */
    	var self = this;

    	//variaveis de cache
    	self.paginacaoContainer = {
    			numeroPagina 	: 1
    			,totalItens 	: 0
    			,itensPorPagina : '10'
    			,lista			: []
		    	,filtro			: {
					    			nome		:''
				    				,sobreNome	:''
					    			}
    		};
    	
    	//funcoes publicas
    	self.listarTestes 	= listarTestes;
    	
    	
    	self.getRecursos = function(callback){
    		if(self.recursos){
    			callback(recursos);
    		}else {
    			seguranca.getRecursos('001').then(function(data) {
    				self.recursos = data;
    				callback(data);
    			});
    		}
    	};
    	
    	function listarTestes(filtro, callback){
    		self.filtro = filtro;
    		http.GET('/exemplo/teste',filtro,function(data) {
    			self.testes = data;
    			callback(data);
			});
    		
    	}
   };
})();