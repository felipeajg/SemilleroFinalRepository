import { Component, OnInit } from '@angular/core';
import { VehiculoDTO } from './modelo/vehiculoDTO';
import { MarcaDTO } from './modelo/MarcaDTO';
import { ConsultaMarcaService } from 'src/app/nucleo/servicios/consulta-marcar-servicio/consulta.Marca.service';

@Component({
  selector: 'app-gestion_vehiculos',
  templateUrl: './gestion_vehiculos.component.html'
})
export class GestionVehiculosComponent implements OnInit {
  public vehiculo:VehiculoDTO;
  public marcasDTO : MarcaDTO;
  
  
  constructor() { }

  ngOnInit() {
  	this.vehiculo = { marca: 'Mazda', placa: '123ABC', linea: '', modelo:''  };
  }

  public listarMarcas(){
  }

}
