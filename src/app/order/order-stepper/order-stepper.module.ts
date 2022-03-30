import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStepperIndexComponent } from './order-stepper-index/order-stepper-index.component';
import { RouterModule } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { OrderStepperRoutingModule } from './order-stepper-routing.module';
import { PersonalInformationStepComponent } from './personal-information-step/personal-information-step.component';
import { DeliveryInformationStepComponent } from './delivery-information-step/delivery-information-step.component';
import { DeliveryAddressStepComponent } from './delivery-address-step/delivery-address-step.component';
import { FoodStepComponent } from './food-step/food-step.component';
import { TopingsStepComponent } from './topings-step/topings-step.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { ConfirmStepComponent } from './confirm-step/confirm-step.component';
import { OrderDetailsPreviewModule } from 'src/app/UI/order-details-preview/order-details-preview.module';


@NgModule({
  declarations: [
    OrderStepperIndexComponent,
    PersonalInformationStepComponent,
    DeliveryInformationStepComponent,
    DeliveryAddressStepComponent,
    FoodStepComponent,
    TopingsStepComponent,
    ConfirmStepComponent
  ],
  imports: [
    FormsModule,
    OrderDetailsPreviewModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
    RouterModule,
    StepsModule,
    ToastModule,
    CommonModule,
    OrderStepperRoutingModule
  ]
})
export class OrderStepperModule { }
