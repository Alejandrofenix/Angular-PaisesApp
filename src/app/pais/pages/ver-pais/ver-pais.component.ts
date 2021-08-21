import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from "rxjs/operators";
import { RESTCountriesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais!: RESTCountriesResponse;
  
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService, ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      //SwitchMap permite tomar un observer y regresar otro
      .pipe(switchMap((params) => this.paisService.getPaisXCodigo(params.id)), tap(console.log)) //El tap nos imprime la respuesta 
      .subscribe(pais=>this.pais=pais);
    //Sin SwitchMap este seria el codigo
    // this.activatedRoute.params.subscribe(params => {
    //   this.paisService.getPaisXCodigo(params.id).subscribe(pais => {
    //     console.log(pais);
    //   });

    // })
  }

}
