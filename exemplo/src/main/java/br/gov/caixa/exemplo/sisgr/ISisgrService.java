package br.gov.caixa.exemplo.sisgr;

import java.io.Serializable;

public interface ISisgrService extends Serializable{

	public UsuarioSgr getUsuario(SisgrParams sisgrParams, EProcessoSgr processo);
}
