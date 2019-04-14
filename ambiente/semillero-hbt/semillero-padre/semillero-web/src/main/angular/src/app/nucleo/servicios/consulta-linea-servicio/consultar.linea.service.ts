import { AbstractService } from '../template.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaDTO } from '../../capa/principal/gestion_vehiculos/modelo/MarcaDTO';
import { LineaDTO } from '../../capa/principal/gestion_vehiculos/modelo/LineaDTO';

@Injectable({
    providedIn: 'root'
  })
  /**
   * Servicio para consultar lineas
   */
  export class ConsultaLineaService extends AbstractService {

    constructor(injector: Injector) {
      super(injector);
    }
    /**
     * Servicio para consultar una linea segun la marca
     * @param idMarca 
     */
    public consultarLinea(idMarca:number) : Observable<LineaDTO[]> { 
          return this.get<LineaDTO[]>("/semillero-servicios", "/ConsultasRest/consultarLineasPorMarca",
          {
              "idMarca":""+idMarca,
          } );
      }

}