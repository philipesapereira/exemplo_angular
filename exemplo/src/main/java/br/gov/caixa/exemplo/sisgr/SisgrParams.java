package br.gov.caixa.exemplo.sisgr;

import java.io.Serializable;

public class SisgrParams implements Serializable{

	private static final long serialVersionUID = -676081161091341722L;

	private String certificacao;	 			
	private String unidade; 					
	private String tipoCredencial;		 		
	private String codigoCredencial;	 		
	private String siglaUsuario;	 			
	private String nomeUsuario;	 				
	private String tipoAmbiente;	 			
	private String siglaAmbiente;		 		
	private String tipoEmpresa;	 				
	private String tipoEntidade;	 			
	private String tipoIdentificadorEntidade;	
	private String identificadorEmpresa;	 	
	private String identificadorEntidade; 	
	private String executavel; 					
	private String nivelAcesso; 				
	private String nivelAutenticacao;	 		
	private String sistema; 					
	private String processo; 					
	private String paramPrivado; 				
	private String estagioAmbiente; 			
	private String ip; 							
	private String estacao;
	
	public String getCertificacao() {
		return certificacao;
	}
	public void setCertificacao(String certificacao) {
		this.certificacao = certificacao;
	}
	public String getUnidade() {
		return unidade;
	}
	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}
	public String getTipoCredencial() {
		return tipoCredencial;
	}
	public void setTipoCredencial(String tipoCredencial) {
		this.tipoCredencial = tipoCredencial;
	}
	public String getCodigoCredencial() {
		return codigoCredencial;
	}
	public void setCodigoCredencial(String codigoCredencial) {
		this.codigoCredencial = codigoCredencial;
	}
	public String getSiglaUsuario() {
		return siglaUsuario;
	}
	public void setSiglaUsuario(String siglaUsuario) {
		this.siglaUsuario = siglaUsuario;
	}
	public String getNomeUsuario() {
		return nomeUsuario;
	}
	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}
	public String getTipoAmbiente() {
		return tipoAmbiente;
	}
	public void setTipoAmbiente(String tipoAmbiente) {
		this.tipoAmbiente = tipoAmbiente;
	}
	public String getSiglaAmbiente() {
		return siglaAmbiente;
	}
	public void setSiglaAmbiente(String siglaAmbiente) {
		this.siglaAmbiente = siglaAmbiente;
	}
	public String getTipoEmpresa() {
		return tipoEmpresa;
	}
	public void setTipoEmpresa(String tipoEmpresa) {
		this.tipoEmpresa = tipoEmpresa;
	}
	public String getTipoEntidade() {
		return tipoEntidade;
	}
	public void setTipoEntidade(String tipoEntidade) {
		this.tipoEntidade = tipoEntidade;
	}
	public String getTipoIdentificadorEntidade() {
		return tipoIdentificadorEntidade;
	}
	public void setTipoIdentificadorEntidade(String tipoIdentificadorEntidade) {
		this.tipoIdentificadorEntidade = tipoIdentificadorEntidade;
	}
	public String getIdentificadorEmpresa() {
		return identificadorEmpresa;
	}
	public void setIdentificadorEmpresa(String identificadorEmpresa) {
		this.identificadorEmpresa = identificadorEmpresa;
	}
	public String getExecutavel() {
		return executavel;
	}
	public void setExecutavel(String executavel) {
		this.executavel = executavel;
	}
	public String getNivelAcesso() {
		return nivelAcesso;
	}
	public void setNivelAcesso(String nivelAcesso) {
		this.nivelAcesso = nivelAcesso;
	}
	public String getNivelAutenticacao() {
		return nivelAutenticacao;
	}
	public void setNivelAutenticacao(String nivelAutenticacao) {
		this.nivelAutenticacao = nivelAutenticacao;
	}
	public String getSistema() {
		return sistema;
	}
	public void setSistema(String sistema) {
		this.sistema = sistema;
	}
	public String getProcesso() {
		return processo;
	}
	public void setProcesso(String processo) {
		this.processo = processo;
	}
	public String getParamPrivado() {
		return paramPrivado;
	}
	public void setParamPrivado(String paramPrivado) {
		this.paramPrivado = paramPrivado;
	}
	public String getEstagioAmbiente() {
		return estagioAmbiente;
	}
	public void setEstagioAmbiente(String estagioAmbiente) {
		this.estagioAmbiente = estagioAmbiente;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getEstacao() {
		return estacao;
	}
	public void setEstacao(String estacao) {
		this.estacao = estacao;
	}
	public String getIdentificadorEntidade() {
		return identificadorEntidade;
	}
	public void setIdentificadorEntidade(String identificadorEntidade) {
		this.identificadorEntidade = identificadorEntidade;
	}

}