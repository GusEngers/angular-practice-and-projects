import { Component } from '@angular/core';

// Interface
import { DMCard } from '../../interfaces/card.interface';

@Component({
  selector: 'main-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
  projects: DMCard[] = [
    {
      title: 'Contador',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
      link: 'contador',
    },
    {
      title: 'Lista de Usuarios',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
      link: 'user-list',
    },
    {
      title: 'Calculadora',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
      link: 'calculadora',
    },
    {
      title: 'Pruebas',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
      link: 'pruebas',
    },
    {
      title: 'Formulario Reactivo',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
      link: 'reactive-form',
    },
  ];
}
