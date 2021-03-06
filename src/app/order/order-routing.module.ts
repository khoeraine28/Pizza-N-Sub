import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderPlacedScreenComponent } from './order-placed-screen/order-placed-screen.component';

const routes: Routes = [
  { 
    path: '', 
    component: OrderIndexComponent, 
    children: [{
      path: '',
      data: {
        preload: true,
      },
      loadChildren: () =>
          import('./order-stepper/order-stepper.module').then(
              (m) => m.OrderStepperModule,
          ),
    }]
  },
  {
    path: 'placed',
    component: OrderPlacedScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRoutingModule { }
