import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent{


  termino: string ='';
  hayError: boolean = false;
  sinPaises:boolean = false;
  paises:RESTCountriesResponse[]=[];
  constructor(private paisService:PaisService) { }

  buscar( termino: string){
  
    this.hayError=false;
    this.termino=termino;
    this.paises=[];
    this.paisService.buscarXRegion(this.termino).subscribe(resp=>{
      this.paises=resp;
      this.sinPaises=false;
    },(err)=>{
      this.hayError=true;
      
    });

  }
  
  sugerencias(termino:string){
    this.hayError=false;
    //TODO: crear sugerencias
  }
}
