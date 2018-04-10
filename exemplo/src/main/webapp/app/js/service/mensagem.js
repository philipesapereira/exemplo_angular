(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('mensagem', mensagem);

    mensagem.$inject = [];
	
    function mensagem() {
    	
    	return {
    		success : success
    		,info	: info
    		,alert	: alert
    		,error	: error
    	};
    	
    	function success(mensagem){
    		show('success', mensagem);
    	}
    	
    	function info(mensagem){
    		show('info', mensagem);
    	}
    	
		function alert(mensagem){
			show('warning', mensagem);
    	}

		function error(mensagem){
			show('danger', mensagem);
		}
    	
		function show(type, mensagem){
			
			var template = '<div style="margin-bottom:0.2rem" class="alert alert-'+type+' alert-dismissible show" role="alert">'
				  + mensagem
				  +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
				  +'<span aria-hidden="true">&times;</span>'
				  +'</button>'
				  +'</div>';
			
			$('#mensagem').prepend(template);
			
			var btnClose = $($('#mensagem button')[0]);
			
			btnClose.on('click',function(event){
				close($(event.target).parent());
			});
			
			setTimeout(function(){ 
				close(btnClose.parent());
					},8000);

			function close(elemento){
				elemento.fadeOut(1000,function(){
					elemento.detach();
				});
			}
		}
    };
})();