import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dificultad',
  templateUrl: './dificultad.page.html',
  styleUrls: ['./dificultad.page.scss'],
})
export class DificultadPage implements OnInit {
  category!: number;
  number!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí puedes establecer los valores predeterminados para la categoría y el número de pregunta.
    // Estos valores pueden ser obtenidos de algún otro componente o almacenados en un servicio.
    this.category = 1;
    this.number = '115';
  }

  selectDifficulty(difficulty: string) {
    // Navega a la página 'Pregunta' con los parámetros de categoría, dificultad y número de pregunta.
    this.router.navigate(['/pregunta', this.category, difficulty, this.number]);
  }
}
