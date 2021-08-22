import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "america", "asia", "europe", "oceania"];
  regionActiva: string = '';

  constructor() { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';

  }
  activarRegion(region: string) {
    this.regionActiva = region;

    //TODO: Hacer el llamado al servicio
  }


}
