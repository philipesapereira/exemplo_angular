package br.gov.caixa.exemplo.exeception;

public class ExemploExeception extends RuntimeException {

	private static final long serialVersionUID = 6817977064089306408L;

	EStatusExecep status;
	
	public ExemploExeception(EStatusExecep status, String message, Throwable cause) {
		super(message, cause);
		this.status = status;
	}

	public ExemploExeception(EStatusExecep status, String message) {
		super(message);
		this.status = status;
	}

	public int getStatus() {
		return status.getStatus();
	}

}