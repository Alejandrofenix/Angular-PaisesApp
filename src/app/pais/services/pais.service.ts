import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private  _apiUrl: string ='https://restcountries.eu/rest/v2'
  get httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }
 
  constructor(private http:HttpClient) {}

  buscarPais(termino:string): Observable<RESTCountriesResponse []>{
    const url = `${this._apiUrl}/name/${termino}`
    return this.http.get<RESTCountriesResponse[]>(url, {params: this.httpParams});
  }

  buscarXCapital(termino:string): Observable<RESTCountriesResponse []>{
    const url = `${this._apiUrl}/capital/${termino}`
    return this.http.get<RESTCountriesResponse[]>(url, {params: this.httpParams});
  }

  buscarXRegion(termino:string): Observable<RESTCountriesResponse []>{
   
    const url = `${this._apiUrl}/region/${termino}`
    return this.http.get<RESTCountriesResponse[]>(url, {params: this.httpParams});
  }

  getPaisXCodigo(id:string): Observable<RESTCountriesResponse >{
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountriesResponse>(url);
    
  }
}
