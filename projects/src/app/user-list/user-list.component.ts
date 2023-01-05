import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    {
      name: "Esteban",
      active: true
    },
    {
      name: "Julian",
      active: true
    },
    {
      name: "Hernan",
      active: false
    }
  ];
}
