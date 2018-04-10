package br.gov.caixa.exemplo.util;

import java.io.Serializable;


/**
 * Classe auxiliar para troca de informacao entre o webservice e o service de uma funcionalidade
 * que seja paginada.
 * 
 * @author f737796
 *
 * @param <F> Tipo de classe do filtro.
 */
public class PaginacaoRequest<F> implements Serializable{

	private static final long serialVersionUID = -6425034373088854253L;

	/** Numero da pagina atual. */
	private Integer numeroPagina;
	
	/** Quantidade de registros que serao exibidos. */
	private Integer itensPorPagina;
	
	/** Objeto do filtro. */
	private F filtro;

	public PaginacaoRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaginacaoRequest(Integer numeroPagina, Integer itensPorPagina,
			F filtro) {
		super();
		this.numeroPagina = numeroPagina;
		this.itensPorPagina = itensPorPagina;
		this.filtro = filtro;
	}

	//GET SET
	public Integer getFromIndex(){
		return (this.numeroPagina -1) * itensPorPagina;
	}
	
	public Integer getToIndex(){
		return this.numeroPagina * itensPorPagina;
	}
	
	public Integer getNumeroPagina() {
		return numeroPagina;
	}

	public void setNumeroPagina(Integer numeroPagina) {
		this.numeroPagina = numeroPagina;
	}

	public Integer getItensPorPagina() {
		return itensPorPagina;
	}

	public void setItensPorPagina(Integer itensPorPagina) {
		this.itensPorPagina = itensPorPagina;
	}

	public F getFiltro() {
		return filtro;
	}

	public void setFiltro(F filtro) {
		this.filtro = filtro;
	}

}