package br.gov.caixa.exemplo.ws.exemplo;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import br.gov.caixa.exemplo.service.exemplo.dto.ExemploFiltroDTO;
import br.gov.caixa.exemplo.service.exemplo.dto.TesteDTO;
import br.gov.caixa.exemplo.sisgr.EProcessoSgr;
import br.gov.caixa.exemplo.util.PaginacaoRequest;
import br.gov.caixa.exemplo.util.PaginacaoResponse;
import br.gov.caixa.exemplo.util.Resource;

@Path("/exemplo/teste")
@Stateless
@Consumes({ MediaType.APPLICATION_JSON })
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class TesteWS extends Resource {

	private static final long serialVersionUID = -7816255929101925736L;

//	@Context ServletRequest request;
//	@Context HttpServletResponse response;
	
	
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
	public Response buscaTodos(
			@QueryParam("numeroPagina") Integer numeroPagina
			,@QueryParam("itensPorPagina") Integer itensPorPagina
			,@QueryParam("nome") String nome
			,@QueryParam("sobreNome") String sobreNome
			) {
		
		ExemploFiltroDTO filtro = new ExemploFiltroDTO();
		filtro.setNome(nome);
		filtro.setSobreNome(sobreNome);
		
		PaginacaoRequest<ExemploFiltroDTO> paginacaoRequest = new PaginacaoRequest<>(numeroPagina,itensPorPagina,filtro);
		
		
		getUsuario(EProcessoSgr.EXEMPLO_TESTE);
		
		List<TesteDTO> lista = new ArrayList<>();
		Integer total = 200;
		
		for(int i =  1; i <= total; i++){
			lista.add(new TesteDTO(i,filtro.getNome(), filtro.getSobreNome(), filtro.getNome()+"@"+filtro.getSobreNome()+"_"+i));
		}
		
		PaginacaoResponse<TesteDTO> paginacaoResponse = new PaginacaoResponse<>();
		paginacaoResponse.setTotalItens(total);
		paginacaoResponse.setLista(lista.subList(paginacaoRequest.getFromIndex(), paginacaoRequest.getToIndex()));
		
		return build(Status.OK, paginacaoResponse); 
	}
}
