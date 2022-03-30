import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { OrderDetailsPreviewComponent } from './order-details-preview.component';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
      OrderDetailsPreviewComponent
  ],
  imports: [
    FormsModule,
    DividerModule,
    InputTextModule,
    CommonModule
  ],
  exports: [OrderDetailsPreviewComponent]
})
export class OrderDetailsPreviewModule { }
