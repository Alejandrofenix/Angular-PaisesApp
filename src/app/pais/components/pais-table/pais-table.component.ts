import { Component, Input, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent {

  @Input() paises: RESTCountriesResponse[]=[];  
  constructor() { }


}
