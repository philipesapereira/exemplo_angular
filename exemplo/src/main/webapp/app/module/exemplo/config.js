(function() {
	'use strict';
	angular.module(EXEMPLO_MODULE, []);
})();
(function() {
	'use strict';
	angular.module(EXEMPLO_MODULE)
	.config(['$stateProvider',function ($stateProvider) {
    	
		$stateProvider
		.state('exemplo/teste/consulta', {
		    parent: BASIC_TEMPLATE
		    ,url: '/exemplo/teste'
	    	,templateUrl: './module/exemplo/teste/exemploTesteConsulta.html'
	    	,controller:'exemploTesteConsultaCtrl'
			,controllerAs:'vm'
		  })
		  .state('exemplo/teste/detalhe', {
		    parent: BASIC_TEMPLATE
		    ,url: '/exemplo/teste/detalhe/:id'
	    	,templateUrl: './module/exemplo/teste/exemploTesteDetalhe.html'
	    	,controller:'exemploTesteDetalheCtrl'
			,controllerAs:'vm'
		  })
		  

    }]);
})();
