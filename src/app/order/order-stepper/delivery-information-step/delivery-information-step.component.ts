import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStepperService } from '../order-stepper.service';
import { DeliveryInformation } from '../order-type/order.type';

@Component({
  selector: 'app-delivery-information-step',
  templateUrl: './delivery-information-step.component.html',
  styleUrls: ['./delivery-information-step.component.css']
})
export class DeliveryInformationStepComponent implements OnInit {
  deliveryInformation!: DeliveryInformation;

  constructor(
    private router: Router,
    private orderStepperService: OrderStepperService
  ) { }

  ngOnInit(): void {
    this.deliveryInformation = this.orderStepperService.getTicketInformation().delivery
  }

  previousPage(){
    this.router.navigate(['order/personal'])
  }

  nextPage(){
    this.router.navigate(['order/address'])
  }
}
