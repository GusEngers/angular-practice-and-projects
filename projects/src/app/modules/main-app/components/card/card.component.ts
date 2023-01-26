import { Component } from '@angular/core';

// Import interface
import { DMCard } from '../../interfaces/card.interface';

@Component({
  selector: 'main-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  data: DMCard = {
    title: 'CONTADOR',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
    link: 'contador',
  };
}
