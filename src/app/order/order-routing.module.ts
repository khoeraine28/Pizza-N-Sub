import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderIndexComponent } from './order-index/order-index.component';

const routes: Routes = [
  { path: '', component: OrderIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRoutingModule { }
