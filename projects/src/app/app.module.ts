import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../material.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

// Imports de Modulos
import { MainAppModule } from './modules/main-app/main-app.module';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    CalculadoraComponent,
    PruebasComponent,
    PruebaComponent,
    ReactiveFormComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MainAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
