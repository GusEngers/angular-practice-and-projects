import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css', './a.component.css']
})
export class BodyComponent {
  show:boolean = true;
  count:number = 0;
  saludos:string[] = ["hola", "buenos días", "chau"];
}
