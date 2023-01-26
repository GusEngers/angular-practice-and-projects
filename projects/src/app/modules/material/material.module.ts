import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatToolbarModule],
})
export class MaterialModule {}
