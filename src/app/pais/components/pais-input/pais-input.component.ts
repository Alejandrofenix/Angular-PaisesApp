import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  debouncer: Subject<string> = new Subject();


  ngOnInit(): void {

    this.debouncer
    .pipe(debounceTime(300)) //No realizar el subscribe hasta que el observador deje de emitir valores por 300 milesimas de segundos
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });

  }


  buscar() {

    this.onEnter.emit(this.termino);

  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
    
  }


}
