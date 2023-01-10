import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  operation: string = '+';
  result: number = 0;
  calc_but = [
    { value: 7, class: 'number_button' },
    { value: 8, class: 'number_button' },
    { value: 9, class: 'number_button' },
    { value: '/', class: 'operation_button' },
    { value: 4, class: 'number_button' },
    { value: 5, class: 'number_button' },
    { value: 6, class: 'number_button' },
    { value: '*', class: 'operation_button' },
    { value: 1, class: 'number_button' },
    { value: 2, class: 'number_button' },
    { value: 3, class: 'number_button' },
    { value: '-', class: 'operation_button' },
    { value: 0, class: 'number_button' },
    { value: 'C', class: 'clear_button' },
    { value: '+', class: 'operation_button' },
  ];
}
