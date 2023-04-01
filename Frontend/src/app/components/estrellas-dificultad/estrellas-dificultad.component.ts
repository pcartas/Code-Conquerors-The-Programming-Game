import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estrellas-dificultad',
  templateUrl: './estrellas-dificultad.component.html',
  styleUrls: ['./estrellas-dificultad.component.scss'],
})
export class EstrellasDificultadComponent {
  @Input()
  dificultad!: number;
  @Output() dificultadSeleccionada = new EventEmitter<number>();

  seleccionarDificultad(dificultad: number) {
    this.dificultadSeleccionada.emit(dificultad);
  }
}