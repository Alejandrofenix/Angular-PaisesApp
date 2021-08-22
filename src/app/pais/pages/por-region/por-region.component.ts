import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  paises: RESTCountriesResponse[] = [];
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';

  }
  activarRegion(region: string) {
    if (region == this.regionActiva) return;
    this.regionActiva = region;
    this.paisService.buscarXRegion(region).subscribe(paises => this.paises = paises);

    //TODO: Hacer el llamado al servicio
  }








}
