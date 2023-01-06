import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  newuser = {
    name: "",
    active: true
  };

  clearInput = () => {
    let value = document.getElementById("input-name") as HTMLInputElement
    value.value = "";
  }

  onChange(event: any) {
    this.newuser.name = event.target.value;
  };

  onSubmit(event: any) {
    event.preventDefault();
    this.users.push(this.newuser);
    this.clearInput();
    this.newuser = {
      name: "",
      active: true
    }
  };

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
