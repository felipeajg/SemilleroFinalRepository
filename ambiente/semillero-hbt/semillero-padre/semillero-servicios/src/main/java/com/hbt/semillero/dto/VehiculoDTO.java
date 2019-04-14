/**
 * VehiculoDTO.java
 */
package com.hbt.semillero.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.hbt.semillero.entidades.Linea;

/**
 * <b>Descripción:<b> Clase que determina
 * <b>Caso de Uso:<b> 
 * @author Cindy Johanna Castaño Yepes <felip@heinsohn.com.co>
 * @version 
 */
public class VehiculoDTO implements Serializable {
	/**
	 * serial
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * atributos de la clase veculo
	 */
	private Long idVehiculo;

	private int modelo;
	
	private String placa;
	
	private Linea linea;


	/**
	 * Metodo encargado de retornar el valor del atributo idVehiculo
	 * @return El idVehiculo asociado a la clase
	 */
	public Long getIdVehiculo() {
		return idVehiculo;
	}


	/**
	 * Metodo encargado de modificar el valor del atributo idVehiculo
	 * @param idVehiculo El nuevo idVehiculo a modificar.
	 */
	public void setIdVehiculo(Long idVehiculo) {
		this.idVehiculo = idVehiculo;
	}


	/**
	 * Metodo encargado de retornar el valor del atributo modelo
	 * @return El modelo asociado a la clase
	 */
	public int getModelo() {
		return modelo;
	}


	/**
	 * Metodo encargado de modificar el valor del atributo modelo
	 * @param modelo El nuevo modelo a modificar.
	 */
	public void setModelo(int modelo) {
		this.modelo = modelo;
	}


	/**
	 * Metodo encargado de retornar el valor del atributo placa
	 * @return El placa asociado a la clase
	 */
	public String getPlaca() {
		return placa;
	}


	/**
	 * Metodo encargado de modificar el valor del atributo placa
	 * @param placa El nuevo placa a modificar.
	 */
	public void setPlaca(String placa) {
		this.placa = placa;
	}


	/**
	 * Metodo encargado de retornar el valor del atributo linea
	 * @return El linea asociado a la clase
	 */
	public Linea getLinea() {
		return linea;
	}


	/**
	 * Metodo encargado de modificar el valor del atributo linea
	 * @param linea El nuevo linea a modificar.
	 */
	public void setLinea(Linea linea) {
		this.linea = linea;
	}
	
	

}
