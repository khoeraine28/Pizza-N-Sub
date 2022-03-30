import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStepperService } from '../order-stepper.service';
import { Food } from '../order-type/order.type';

@Component({
  selector: 'app-food-step',
  templateUrl: './food-step.component.html',
  styleUrls: ['./food-step.component.css']
})
export class FoodStepComponent implements OnInit {
  food!: Food;

  constructor(
    private router: Router, 
    private orderStepperService: OrderStepperService
  ) { }

  ngOnInit(): void {
    this.food = this.orderStepperService.getTicketInformation().food
  }

  previousPage(){
    this.router.navigate(['order/address'])
  }

  nextPage(){
    this.router.navigate(['order/topings'])
  }

}
