package br.gov.caixa.exemplo.sisgr;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UsuarioSgr implements Serializable{

	private static final long serialVersionUID = 344023576857901634L;

	private String nome;	
	private String sigla;
	private List<String> recursos;
	
	public UsuarioSgr() {
		super();
		this.nome = "";
		this.sigla = "";
		this.recursos = new ArrayList<>();
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	public List<String> getRecursos() {
		return recursos;
	}
	public void setRecursos(List<String> recursos) {
		this.recursos = recursos;
	}
	
}