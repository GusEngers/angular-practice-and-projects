import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './contador/contador.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contador', component: ContadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
