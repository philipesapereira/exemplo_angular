package br.gov.caixa.exemplo.ws;

import javax.ejb.Stateless;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import br.gov.caixa.exemplo.util.Resource;
import br.gov.caixa.exemplo.util.Retorno;

@Path("/dashboard")
@Stateless
@Consumes({ MediaType.APPLICATION_JSON })
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class DashboardWS extends Resource {

	private static final long serialVersionUID = -8171685450937945160L;
	
	@Context ServletRequest request;
	@Context HttpServletResponse response;
	
	
//	@POST
//	@Path("/login")
//	public Response login(LoginDto dto) {
//		
//		Retorno<Usuario> retorno = new Retorno<>();
//		Usuario usuario = autenticacaoService.login(dto); 
//		
//		retorno.setData(usuario);
//		
//		
//		return Resource.build(Status.OK, retorno); 
//	}
	
//	@DELETE
//	@Path("/logoff")
//	public Response logoff(Usuario dto) {
//		
//		Retorno<Usuario> retorno = new Retorno<>();
//		
//		return Resource.build(Status.OK, retorno); 
//	}
	
	@GET
	@Path("/teste")
	public Response buscaPermissaoAcesso(@QueryParam("nome") String nome) {
		
		return build(Status.OK, new Retorno<String>("ws ok")); 
	}
}
