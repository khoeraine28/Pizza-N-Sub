import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../order/order-stepper/order-type/order.type';

@Component({
  selector: 'app-order-details-preview',
  templateUrl: './order-details-preview.component.html',
  styleUrls: ['./order-details-preview.component.css']
})
export class OrderDetailsPreviewComponent implements OnInit {
  @Input() public order!: Order
  
  constructor() { }

  ngOnInit(): void {
  }

}
