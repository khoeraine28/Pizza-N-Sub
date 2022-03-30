import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { OrdersScreenComponent } from './orders-screen/orders-screen.component';
import {TableModule} from 'primeng/table';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderModule } from '../order/order.module';
import { OrderDetailsPreviewModule } from '../UI/order-details-preview/order-details-preview.module';

@NgModule({
  declarations: [
    AdminIndexComponent,
    OrdersScreenComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderDetailsPreviewModule,
    OrderModule,
    AdminRoutingModule,
    TableModule
  ]
})
export class AdminModule { }
