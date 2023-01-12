import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  projects = [
    {
      link: '/contador',
      name: 'Contador',
    },
    {
      link: '/user-list',
      name: 'Lista de Usuarios',
    },
    {
      link: '/calculadora',
      name: 'Calculadora',
    },
    { link: '/pruebas', name: 'Pruebas' },
  ];
}
