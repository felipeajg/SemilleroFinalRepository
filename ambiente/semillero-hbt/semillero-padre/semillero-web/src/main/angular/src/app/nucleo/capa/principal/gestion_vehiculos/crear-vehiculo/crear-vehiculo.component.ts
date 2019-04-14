import { Component, OnInit } from '@angular/core';
import { MarcaDTO } from '../modelo/MarcaDTO';
import { LineaDTO } from '../modelo/LineaDTO';
import { ConsultaMarcaService } from 'src/app/nucleo/servicios/consulta-marcar-servicio/consulta.Marca.service';
import { ConsultaLineaService } from 'src/app/nucleo/servicios/consulta-linea-servicio/consultar.linea.service';
import { VehiculoService } from 'src/app/nucleo/servicios/crear-vehiculo-servicio/Vehiculo.service';
import { VehiculoDTO } from '../modelo/vehiculoDTO';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  /**
   * Listas de los modelos
   */
	public listaMarcasDTO: MarcaDTO[];
  public listaLineasDTO: LineaDTO[];
  public listaVehiculosDTO: VehiculoDTO[];	
  public vehiculoDTO : VehiculoDTO;
/**
 * atributus del vehiculo
 */
  public idMarca:number;
  public marca:number;
  public modelo:number;
  public placa:string;
  public idLinea:number;
  /**
   * banderas para cambiar de vistas y su titulo correspondiente
   */
  public flagCrear:boolean;
  public flagEditar:boolean;
  public flagGestionar:boolean;
  public titulo:string;
  
  /**
   * contructor
   * @param marcaService 
   * @param lineaService 
   * @param vehiculoService 
   */
  constructor(private marcaService : ConsultaMarcaService, private lineaService:ConsultaLineaService,
    private vehiculoService : VehiculoService) 
		{ }

    /**
     * ngOninit
     */
  ngOnInit() {
    this.flagCrear=true;
    this.flagEditar=false;
    this.flagGestionar=false;
		this.listarMarcas();
    this.idMarca=0;
    this.titulo="Crear vehiculo"
  }

  /**
   * metodo que cambia la bandera crear y el titulo
   */
  public flagCrearV(){
    this.flagCrear=true;
    this.flagEditar=false;
    this.flagGestionar=false;
    this.titulo="Crear vehiculo"

  }

  /**
   * metodo que cambia la bandera editar y el titulo
   */
  public flagEditarV(){
    this.flagEditar=true;
    this.flagCrear=false;
    this.flagGestionar=false;
    this.titulo="Editar vehiculo"

  }

  /**
   * metodo que cambia la bandera gestionar y el titulo
   */
  public flagGestionarV(){
    this.flagGestionar=true;
    this.flagCrear=false;
    this.flagEditar=false;

    this.titulo="Gestionar vehiculo"

  }

  /**
   * Metodo que llama el servicio consultarMarca y trae las marcas
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
    * Metodo que llama al metodo consultarLinea del servicio y lista las lineas
    * por la marca
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

  /**
   * Metodo que crea un vehiculo por medio del servicio y su metodo crearVehiculo
   */
  public crearVehiculo(){ 

    var vehiculo:VehiculoDTO ={
       marca:""+this.idMarca,
        placa: this.placa, 
        linea: ""+this.idLinea, 
        modelo: ""+this.modelo, };
   
    this.vehiculoService.crearVehiculo(vehiculo);

  }

  /**
   * Metodo que edita un vehiculo por medio del metodo editarVehiculo
   */
  public editarVehiculo(){

    var vehiculo:VehiculoDTO ={
      marca:""+this.idMarca,
       placa: this.placa, 
       linea: ""+this.idLinea, 
       modelo: ""+this.modelo, };
  
   this.vehiculoService.editarVehiculo(vehiculo);

  }

  /**
   * Metodo que llama los vehiculos por medio de una linea
   */
  public gestionarVehiculo(){    
   this.listaVehiculosDTO = [];
   this.vehiculoService.consultarVehiculo(this.idLinea).subscribe(
     veh => {
       this.listaVehiculosDTO = veh;
     },
     error => {
      console.log(error);
    }     
   );
  }

  
  
}
