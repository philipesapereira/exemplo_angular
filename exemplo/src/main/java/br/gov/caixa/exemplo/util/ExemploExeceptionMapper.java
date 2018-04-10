package br.gov.caixa.exemplo.util;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import br.gov.caixa.exemplo.exeception.ExemploExeception;

@Provider
public class ExemploExeceptionMapper implements ExceptionMapper<ExemploExeception>{

	@Override
	public Response toResponse(ExemploExeception e) {
		
		return Response
				.status(Status.UNAUTHORIZED)
				.entity(e.getMessage())
				.header("Content-Type", "text/plain; charset=utf-8")
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
				.build();
	}

}