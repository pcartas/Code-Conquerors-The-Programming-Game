import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss'],
})
export class InputNumeroComponent {
  @Output() numeroValido = new EventEmitter<number>();
    numero!: number;

  validarNumero() {
    if (this.numero >= 100 && this.numero <= 999) {
      this.numeroValido.emit(this.numero);
    }
  }
}
