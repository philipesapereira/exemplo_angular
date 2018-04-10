package br.gov.caixa.exemplo.sisgr;

import br.gov.caixa.exemplo.exeception.EStatusExecep;
import br.gov.caixa.exemplo.exeception.ExemploExeception;

public class SisgrService implements ISisgrService{

	private static final long serialVersionUID = -3330976662400796199L;

	@Override
	public UsuarioSgr getUsuario(SisgrParams sisgrParams, EProcessoSgr processo) {
		
		if(null == sisgrParams){
			throw new ExemploExeception(EStatusExecep.UNAUTHORIZED, "Parâmetros de autorização não informados.");
		}
		
		UsuarioSgr usuario = new UsuarioSgr();
		usuario.setNome(sisgrParams.getNomeUsuario());
		usuario.setSigla(sisgrParams.getSiglaUsuario());
		
		return usuario;
	}

}
