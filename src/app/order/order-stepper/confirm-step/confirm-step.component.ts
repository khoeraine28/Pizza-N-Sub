import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStepperService } from '../order-stepper.service';
import { Order } from '../order-type/order.type';

@Component({
  selector: 'app-confirm-step',
  templateUrl: './confirm-step.component.html',
  styleUrls: ['./confirm-step.component.css']
})
export class ConfirmStepComponent implements OnInit {
  order!: Order;

  constructor(
    private router: Router, 
    private orderStepperService: OrderStepperService
  ) { }

  ngOnInit(): void {
    this.order = this.orderStepperService.getTicketInformation()
  }

  previousPage() {
    this.router.navigate(['order/topings'])
  }

  placeOrder(){
    this.orderStepperService.complete()
  }

}
