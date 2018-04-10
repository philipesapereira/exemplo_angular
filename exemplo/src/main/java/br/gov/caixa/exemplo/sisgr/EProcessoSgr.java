package br.gov.caixa.exemplo.sisgr;

public enum EProcessoSgr {

	EXEMPLO_TESTE("001001")
	;
	
	public String processo;

	private EProcessoSgr(String processo) {
		this.processo = processo;
	}
	
	public String getCodigo(){
		return this.processo;
	}
}