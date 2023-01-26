import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Material Module
import { MaterialModule } from '../material/material.module';
// Routing Module
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [NavBarComponent],
})
export class MainAppModule {}
