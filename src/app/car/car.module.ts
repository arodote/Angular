import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { PedalsComponent } from './car/pedals/pedals.component';
import { DisplayComponent } from './car/display/display.component';

@NgModule({
  declarations: [CarComponent, PedalsComponent, DisplayComponent],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
