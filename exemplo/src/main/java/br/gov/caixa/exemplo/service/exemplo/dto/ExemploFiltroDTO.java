package br.gov.caixa.exemplo.service.exemplo.dto;

import java.io.Serializable;

public class ExemploFiltroDTO implements Serializable{

	private static final long serialVersionUID = -4681022327542032151L;

	private String nome;
	
	private String sobreNome;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}
	
}
