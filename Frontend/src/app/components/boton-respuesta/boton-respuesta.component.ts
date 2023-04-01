import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-respuesta',
  templateUrl: './boton-respuesta.component.html',
  styleUrls: ['./boton-respuesta.component.scss'],
})
export class BotonRespuestaComponent {
  @Input()
  respuesta!: string;
  textoBoton: string = 'Mostrar Respuesta';

  mostrarRespuesta() {
    this.textoBoton = this.textoBoton === 'Mostrar Respuesta' ? this.respuesta : 'Mostrar Respuesta';
  }
}