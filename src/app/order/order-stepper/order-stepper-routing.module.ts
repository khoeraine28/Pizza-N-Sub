import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { OrderStepperIndexComponent } from './order-stepper-index/order-stepper-index.component';
import { PersonalInformationStepComponent } from './personal-information-step/personal-information-step.component';
import { DeliveryInformationStepComponent } from './delivery-information-step/delivery-information-step.component';
import { DeliveryAddressStepComponent } from './delivery-address-step/delivery-address-step.component';
import { FoodStepComponent } from './food-step/food-step.component';
import { TopingsStepComponent } from './topings-step/topings-step.component';
import { ConfirmStepComponent } from './confirm-step/confirm-step.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
        path:'',component: OrderStepperIndexComponent, 
        children:[
          {path:'', redirectTo: 'personal', pathMatch: 'full'},
          {path: 'personal', component: PersonalInformationStepComponent},
          {path: 'delivery', component: DeliveryInformationStepComponent},
          {path: 'address', component: DeliveryAddressStepComponent},
          {path: 'food', component: FoodStepComponent},
          {path: 'topings', component: TopingsStepComponent},
          {path: 'confirm', component: ConfirmStepComponent}
			  ]
      }
		])
	],
	exports: [
		RouterModule
	]
})


export class OrderStepperRoutingModule { }
