import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './contador/contador.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contador', component: ContadorComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'calculadora', component: CalculadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
