import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private  _apiUrl: string ='https://restcountries.eu/rest/v2'
 
  constructor(private http:HttpClient) {}

  buscarPais(termino:string): Observable<RESTCountriesResponse []>{
    const url = `${this._apiUrl}/name/${termino}`
    return this.http.get<RESTCountriesResponse[]>(url);
  }

  buscarXCapital(termino:string): Observable<RESTCountriesResponse []>{
    const url = `${this._apiUrl}/capital/${termino}`
    return this.http.get<RESTCountriesResponse[]>(url);
  }
}
