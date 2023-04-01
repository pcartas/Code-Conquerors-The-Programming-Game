import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.page.html',
  styleUrls: ['./go-to.page.scss'],
})
export class GoToPage implements OnInit {
  randomNumber!: number;
  inputNumber!: number;
  category!: number;

  constructor(private router: Router) {}

  ngOnInit() {
    // Establecer un valor predeterminado para la categoría, por ejemplo, desde un servicio compartido.
    this.category = 1;
  }

  throwDice() {
      const getRandomDigit = (): number => Math.floor(Math.random() * 6) + 1;
      const randomDigits: number[] = [getRandomDigit(), getRandomDigit(), getRandomDigit()];
      this.randomNumber = parseInt(randomDigits.join(''), 10);
  }

  isValidNumber() {
    return esNumeroValido(this.inputNumber);
  }

  goToDifficulty() {
    const selectedNumber = this.randomNumber || this.inputNumber;
    this.router.navigate(['/dificultad', this.category, selectedNumber]);
  }
}


function esNumeroValido(numero: number): boolean {
  const strNumero = numero.toString();

  if (strNumero.length !== 3) {
    return false;
  }

  for (const digito of strNumero) {
    const digitoNumero = parseInt(digito, 10);
    if (digitoNumero < 1 || digitoNumero > 6) {
      return false;
    }
  }

  return true;
}