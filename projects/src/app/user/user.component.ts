import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  inputs: ['name', 'status'],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name:string|null = null;
  status:boolean|null = null;
}

