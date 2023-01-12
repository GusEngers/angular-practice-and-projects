import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  @Input() nombre!: string;
  @Output() alerta: EventEmitter<string> = new EventEmitter<string>();

  lanzarAlerta() {
    this.alerta.emit(`Hola ${this.nombre}`);
  }
}
