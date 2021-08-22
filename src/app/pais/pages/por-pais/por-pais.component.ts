import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
      `
      li{
        cursor:pointer;
      }
      `
   
  ]
})
export class PorPaisComponent {

  termino: string ='';
  hayError: boolean = false;
  sinPaises:boolean = false;
  mostrarSugerencias: boolean = false;  
  paises:RESTCountriesResponse[]=[];
  paisesSugeridos:RESTCountriesResponse[]=[];
  constructor(private paisService:PaisService) { }

  buscar( termino: string){
    this.mostrarSugerencias=false;

    this.hayError=false;
    this.termino=termino;
    this.paises=[];
    this.paisService.buscarPais(this.termino).subscribe(resp=>{
      this.paises=resp;
      this.sinPaises=false;
    },(err)=>{
      this.hayError=true;
      
    });

  }
  
  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino)
      .subscribe(paises=> this.paisesSugeridos=paises.splice(0,5), (err)=> this.paisesSugeridos=[]);
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
