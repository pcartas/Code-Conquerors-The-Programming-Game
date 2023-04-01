import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  categories = [
    { id: 1, name: 'Programación y Lenguajes', color: '#ff0000' },
    { id: 2, name: 'Bases de Datos', color: '#00ff00' },
    { id: 3, name: 'Redes', color: '#0000ff' },
    { id: 4, name: 'Arquitectura de Software', color: '#ffff00' },
    { id: 5, name: 'Algoritmos & Estructura de Datos', color: '#00ffff' },
    { id: 6, name: 'Sistemas Operativos', color: '#ff00ff' },
    { id: 7, name: 'Seguridad Informática', color: '#000000' },
    { id: 8, name: 'Inteligencia artificial & Machine learning', color: '#ffffff' },
    { id: 9, name: 'Infraestructura & Devops', color: '#ff8800' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToCategory(categoryId: number) {
    this.router.navigate(['/go-to', categoryId]);
  }

  goToConfiguration() {
    this.router.navigate(['/configuracion']);
  }
}
