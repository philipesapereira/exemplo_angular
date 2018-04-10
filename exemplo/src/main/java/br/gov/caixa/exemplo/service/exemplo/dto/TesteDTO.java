package br.gov.caixa.exemplo.service.exemplo.dto;

import java.io.Serializable;

public class TesteDTO implements Serializable{

	private static final long serialVersionUID = -6856372313177183058L;

	private Integer id;
	private String nome;
	private String sobreNome;
	private String userName;
	
	public TesteDTO() {
		super();
	}
	
	public TesteDTO(Integer id, String nome, String sobreNome, String userName) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobreNome = sobreNome;
		this.userName = userName;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}