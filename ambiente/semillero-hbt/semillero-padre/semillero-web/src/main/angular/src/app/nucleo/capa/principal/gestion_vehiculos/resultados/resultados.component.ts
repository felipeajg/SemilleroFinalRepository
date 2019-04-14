import { Component, Input, OnInit } from '@angular/core';

import { ConsultaVehiculosService } from '../../../../../nucleo/servicios/consulta-vehiculos-servicio/consulta.vehiculo.service'
import { VehiculoDTO } from '../modelo/vehiculoDTO';
import { PersonaServicioDTO } from '../modelo/personaServicioDTO';
import { MarcaDTO } from '../modelo/MarcaDTO';
import { ConsultaMarcaService } from 'src/app/nucleo/servicios/consulta-marcar-servicio/consulta.Marca.service';
import { LineaDTO } from '../modelo/LineaDTO';
import { ConsultaLineaService } from 'src/app/nucleo/servicios/consulta-linea-servicio/consultar.linea.service';

 @Component({
  selector: 'app-vehiculos-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  @Input() public marca:string;
	@Input() public placa:string;
	@Input() public nombre:string;
	
  
  public listaVehiculoDTO: VehiculoDTO[]; 
	public vehiculoDTO: VehiculoDTO; 
	public listaMarcasDTO: MarcaDTO[];
	public listaLineasDTO: LineaDTO[];

	public listaPersonasDTO: PersonaServicioDTO[]; 
	public personaDTO: PersonaServicioDTO; 
	
	public idMarca:number;
  
	constructor(private vehiculosService: ConsultaVehiculosService, 
		private marcaService : ConsultaMarcaService, private lineaService:ConsultaLineaService) 
		{ }

  ngOnInit() {
		this.listarMarcas();
		this.idMarca=0;
  }

  public consultarPersonas() {
	    let tipoID: string = '1';
	    let numID: string = '123';
	  	this.vehiculosService.consultarPersonas(tipoID, numID).subscribe(
	    	personas => {
		        this.listaPersonasDTO = personas;
		      },
		      error => {
		        console.log(error);
		      } 
	    );    
	    console.log('resultado servicio.... ' + this.listaPersonasDTO)
   }
   
   public listarVehiculos() {
	    this.listaVehiculoDTO = [];
	  	this.vehiculosService.consultarListaVehiculos().subscribe(
	    	veh => {
		        this.marca = veh.marca;
		      },
		      error => {
		        console.log(error);
		      } 
	    );    
	 }
	 /**
		* Metodo que lista las marcas
		*/
	 public listarMarcas(){
		 this.listaMarcasDTO = [];
		 console.log("lista1", this.listaMarcasDTO)
		 this.marcaService.consultarMarca().subscribe(
			 mar => {
				 this.listaMarcasDTO = mar;
			 },
			 error => {
				console.log(error);
			} 
			
		 );
		 
		 console.log("resultado del servicio", this.listaMarcasDTO);


	 }
	/**
	 * Metodo que lista las lineas segun el servicio y por una marca
	 */
	 public listarLineas(){
		 console.log("entro a listar lineas")
		 console.log("marcaid", this.idMarca)
		this.listaLineasDTO = [];
		this.lineaService.consultarLinea(this.idMarca).subscribe(
			linea => {
				this.listaLineasDTO = linea;
			},
			error => {
			 console.log(error);
		 } 
		 
		);

		console.log("resultado del servicio lineasss", this.listaLineasDTO);
	}
}

