import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersScreenComponent } from './orders-screen/orders-screen.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminIndexComponent,
    children: [
      {
        path: 'orders',
        component: OrdersScreenComponent,
      },
      {
        path: 'orders/:orderId',
        component: OrderDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
