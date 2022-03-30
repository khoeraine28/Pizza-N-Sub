import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStepperService } from '../order-stepper.service';
import { DeliveryInformation } from '../order-type/order.type';

@Component({
  selector: 'app-delivery-address-step',
  templateUrl: './delivery-address-step.component.html',
  styleUrls: ['./delivery-address-step.component.css']
})
export class DeliveryAddressStepComponent implements OnInit {
  deliveryInformation!: DeliveryInformation;
  
  constructor(
    private router: Router,
    private orderStepperService: OrderStepperService
  ) { }

  ngOnInit(): void {
    this.deliveryInformation = this.orderStepperService.getTicketInformation().delivery
  }
  
  previousPage(){
    this.router.navigate(['order/delivery'])
  }

  nextPage(){
    this.router.navigate(['order/food'])
  }

}
