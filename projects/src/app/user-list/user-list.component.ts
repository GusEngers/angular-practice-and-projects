import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  listStatus: string[] = ['Activo', 'Inactivo'];
  status: string = this.listStatus[0];
  name!: string;
  user = {
    name: '',
    active: '',
  };

  users = [
    {
      name: 'Esteban',
      active: 'Activo',
    },
    {
      name: 'Julian',
      active: 'Activo',
    },
    {
      name: 'Hernan',
      active: 'Inactivo',
    },
  ];

  clearInput = () => {
    let value = document.getElementById('input-name') as HTMLInputElement;
    value.value = '';
  };

  clearUser = () => {
    this.user = {
      name: '',
      active: '',
    };
  };

  onChange = (event: any) => {
    event.preventDefault();
    this.user.name = event.target.value;
  };

  onClick = (event: any) => {
    event.preventDefault();
    this.user.active = this.status;
    this.users.unshift(this.user);
    this.clearInput();
    this.clearUser();
  };
  // statusUser: string = '';
  // statusFunction = () => {
  //   // let radios = document.getElementsByName(
  //   //   'options-radio',
  //   // ) as HTMLInputElement;
  //   console.log(this.statusUser);
  // };

  // list: string[] = ['Activo', 'Inactivo'];
  // newuser = {
  //   name: '',
  //   active: true,
  // };

  // clearInput = () => {
  //   let value = document.getElementById('input-name') as HTMLInputElement;
  //   value.value = '';
  // };

  // onChange(event: any) {
  //   this.newuser.name = event.target.value;
  // }

  // onSubmit(event: any) {
  //   event.preventDefault();
  //   this.statusFunction();
  //   this.users.push(this.newuser);
  //   this.clearInput();
  //   this.newuser = {
  //     name: '',
  //     active: true,
  //   };
  // }

  // users = [
  //   {
  //     name: 'Esteban',
  //     active: true,
  //   },
  //   {
  //     name: 'Julian',
  //     active: true,
  //   },
  //   {
  //     name: 'Hernan',
  //     active: false,
  //   },
  // ];
}
