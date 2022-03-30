import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderPlacedScreenComponent } from './order-placed-screen/order-placed-screen.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    OrderIndexComponent,
    OrderPlacedScreenComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    OrderRoutingModule,
  ], 
  exports: []
})
export class OrderModule { }
