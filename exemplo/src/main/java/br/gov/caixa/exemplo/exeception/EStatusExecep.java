package br.gov.caixa.exemplo.exeception;

public enum EStatusExecep {

	UNAUTHORIZED(401)
	;
	
	public int status;

	private EStatusExecep(int status) {
		this.status = status;
	}
	
	public int getStatus(){
		return this.status;
	}
}