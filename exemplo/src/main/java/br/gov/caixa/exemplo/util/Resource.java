package br.gov.caixa.exemplo.util;

import java.io.Serializable;

import javax.inject.Inject;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import br.gov.caixa.exemplo.exeception.EStatusExecep;
import br.gov.caixa.exemplo.exeception.ExemploExeception;
import br.gov.caixa.exemplo.sisgr.EProcessoSgr;
import br.gov.caixa.exemplo.sisgr.ISisgrService;
import br.gov.caixa.exemplo.sisgr.UsuarioSgr;


public abstract class Resource implements Serializable{
	
	private static final long serialVersionUID = -1520292277606028339L;

	@Context HttpHeaders headers;
	
	@Inject
	private ISisgrService sisgrService;
	
	public static Response build(Status status, Object object) {
		
		return Response.status(status)
				.entity(object)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
				.build();
	}

	public UsuarioSgr getUsuario(EProcessoSgr processo) {
		
		try {
			
			String sgrJson = headers.getRequestHeader("usuario_sgr").get(0);
			return new UsuarioSgr();
//		return sisgrService.getUsuario(new Gson().fromJson(sgrJson, SisgrParams.class), processo);
			
		} catch (Exception e) {
			throw new ExemploExeception(EStatusExecep.UNAUTHORIZED, "Erro ao recuperar informações de Usuário.");
		}
		
	}
	
}