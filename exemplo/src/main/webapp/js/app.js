(function() {
	'use strict';
	angular.module(WEB_APP, [
	 	'ngRoute'
	 	,'ngSanitize'
 	]);
})();

//(function() {
//	'use strict';
//	angular.module(WEB_APP).run(function($rootScope,$location) {
//		   
//		   $rootScope.$on('$locationChangeStart', function (event, next, current) {
//
//			   try{
//				   $rootScope.usuarioLogado = JSON.parse(sessionStorage.getItem(USUARIO_LOGADO));
//			   }catch (e) {}
//			   
//				var restrictedPage = $.inArray($location.path(), PUBLIC_ROUTES) === -1;
//	            if (restrictedPage && !$rootScope.usuarioLogado) {
//	                
//	            	$location.path('/login');
//	            }
//				//console.log($location.path());
//	        });
//		   
//		});
//})();

(function() {
	'use strict';
	angular.module(WEB_APP).config(['$routeProvider',function ($routeProvider) {
    	
    	$routeProvider
    	
    	.when('/', {
    		templateUrl : 'page/dashboard.html'
			,controller:'dashboardCtrl'
			,controllerAs:'vm'
    		})
    		
    	.when('/reports', {
    		templateUrl : 'page/reports.html'
    		})
    	
    	
    	.otherwise({redirectTo : '/'});
    }]);
})();