import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-categoria',
  templateUrl: './boton-categoria.component.html',
  styleUrls: ['./boton-categoria.component.scss'],
})
export class BotonCategoriaComponent {
  @Input() texto: string | undefined;
  @Input() color: string | undefined;
  @Output() categoriaClicked = new EventEmitter<void>();

  onClick() {
    this.categoriaClicked.emit();
  }
}
