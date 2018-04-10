package br.gov.caixa.exemplo.util;

import java.io.Serializable;
import java.util.List;


/**
 * Classe auxiliar para troca de informacao entre o webservice e o service de uma funcionalidade
 * que seja paginada.
 * 
 * @author f737796
 *
 * @param <L> Tipo de classe da lista de resposta.
 */
public class PaginacaoResponse<L> implements Serializable{

	private static final long serialVersionUID = -6425034373088854253L;

	/** Total de registros que existem no banco. */
	private Integer totalItens;
	
	/** Lista dos registros a serem exibidos. */
	private List<L> lista;

	//GET SET

	public Integer getTotalItens() {
		return totalItens;
	}

	public void setTotalItens(Integer totalItens) {
		this.totalItens = totalItens;
	}

	public List<L> getLista() {
		return lista;
	}

	public void setLista(List<L> lista) {
		this.lista = lista;
	}
	
}