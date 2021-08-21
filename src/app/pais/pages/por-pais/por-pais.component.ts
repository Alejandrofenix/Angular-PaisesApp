import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    
   
  ]
})
export class PorPaisComponent {

  termino: string ='';
  hayError: boolean = false;
  sinPaises:boolean = false;
  paises:RESTCountriesResponse[]=[];
  constructor(private paisService:PaisService) { }

  buscar( termino: string){
  
    this.hayError=false;
    this.termino=termino;
    
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(resp=>{
      console.log(resp);
      this.paises=resp;
      this.sinPaises=false;
    },(err)=>{
      this.hayError=true;
      
    });

  }

}
