import { AbstractService } from '../template.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaDTO } from '../../capa/principal/gestion_vehiculos/modelo/MarcaDTO';

@Injectable({
    providedIn: 'root'
  })
  /**
   * servicio para consultar una marca
   */
  export class ConsultaMarcaService extends AbstractService {

    constructor(injector: Injector) {
      super(injector);
    }
    /**
     * Servicio el cual lista las marcas de la dbo
     */
    public consultarMarca() : Observable<MarcaDTO[]> { 
      console.log("entro al servicio")
        return this.get<MarcaDTO[]>("/semillero-servicios", "/ConsultasRest/consultarMarcas");  
    }


  }



