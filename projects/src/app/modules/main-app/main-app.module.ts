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
import { CardsListComponent } from './components/cards-list/cards-list.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    InfoComponent,
    CardsListComponent,
  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [NavBarComponent, CardComponent, InfoComponent, CardsListComponent],
})
export class MainAppModule {}
