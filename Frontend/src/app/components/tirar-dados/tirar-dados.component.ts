import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirar-dados',
  templateUrl: './tirar-dados.component.html',
  styleUrls: ['./tirar-dados.component.scss'],
})
export class TirarDadosComponent {
  @Output() dadosTirados = new EventEmitter<number>();

  tirarDados() {
    const numero = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    this.dadosTirados.emit(numero);
  }
}
