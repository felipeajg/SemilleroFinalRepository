import { AbstractService } from '../template.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaDTO } from '../../capa/principal/gestion_vehiculos/modelo/MarcaDTO';
import { VehiculoDTO } from '../../capa/principal/gestion_vehiculos/modelo/vehiculoDTO';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Servicios para vehiculo
   */
  export class VehiculoService extends AbstractService {

    /**
     * Contructor
     * @param injector 
     */
    constructor(injector: Injector) {
      super(injector);
    }

    /**
     * Servicio para crear vehiculo
     * @param vehiculoDTO 
     */
    public crearVehiculo(vehiculoDTO:VehiculoDTO) { 
      console.log("entro al servicio")
        return this.post<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/crearVehiculo", vehiculoDTO);  
    }

    /**
     * Servicio para editar vehiculo
     * @param vehiculoDTO 
     */
    public editarVehiculo(vehiculoDTO:VehiculoDTO) { 
      console.log("entro al servicio")
        return this.post<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/editarVehiculo", vehiculoDTO);  
    }

    /**
     * Servicio para consultarVehiculo
     * @param idLinea 
     */
    public consultarVehiculo(idLinea:number) : Observable<VehiculoDTO[]> { 
        return this.get<VehiculoDTO[]>("/semillero-servicios", "/ConsultasRest/consultarVehiculos",
        {
          "linea":""+idLinea,
      } );  
    }




  }