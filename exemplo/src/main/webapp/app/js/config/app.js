(function() {
	'use strict';
	angular.module(WEB_APP, [
	 	'ui.router'
	 	,'ui.bootstrap'
	 	,EXEMPLO_MODULE
 	]);
})();

(function() {
	'use strict';
	angular.module(WEB_APP)
	.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    	
		$stateProvider
		  .state(BASIC_TEMPLATE, {
		    abstract: true
		    ,templateUrl:'./template/basicTemplate.html'
		  })
		  .state('home', {
		    parent: BASIC_TEMPLATE
		    ,url: '/home'
	    	,templateUrl: './commonpage/home/home.html'
    		,controller : 'homeController'
			,controllerAs:'vm'
		  })
		  .state('acessoNegado', {
		    parent: BASIC_TEMPLATE
		    ,url: '/acessoNegado/:msg'
	    	,templateUrl: './commonpage/acessonegado/acessoNegado.html'
    		,controller:'acessoNegadoController'
			,controllerAs:'vm'
		  })
		  
		  $urlRouterProvider.otherwise('/home');
    }]);
})();