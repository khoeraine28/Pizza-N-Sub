import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderStepperComponent } from './order-stepper/order-stepper.component';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    OrderIndexComponent,
    OrderStepperComponent
  ],
  imports: [
    StepsModule,
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
