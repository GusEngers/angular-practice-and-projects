import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent {
  name: string = '';

  crearAlerta(event: string) {
    alert(event);
  }
}
