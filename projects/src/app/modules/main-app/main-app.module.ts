import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Material Module
import { MaterialModule } from '../material/material.module';
// Routing Module
import { AppRoutingModule } from '../../app-routing.module';
// Components
import { CardComponent } from './components/card/card.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [NavBarComponent, CardComponent, InfoComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [NavBarComponent, CardComponent],
})
export class MainAppModule {}
