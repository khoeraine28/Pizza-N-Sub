import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { OrderStepperService } from '../order-stepper.service';
import { Food } from '../order-type/order.type';
import { ToppingOption } from '../order-type/topping.type';

@Component({
  selector: 'app-topings-step',
  templateUrl: './topings-step.component.html',
  styleUrls: ['./topings-step.component.css']
})
export class TopingsStepComponent implements OnInit {
  food!: Food;

  toppingOptions: Array<ToppingOption> = [];

  constructor(
    private router: Router, 
    private orderStepperService: OrderStepperService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.food = this.orderStepperService.getTicketInformation().food;
    this.toppingOptions = this.orderService.getFoodToppingOptions(this.food.name);
  }

  previousPage(){
    this.router.navigate(['order/food'])
  }

  nextPage(){
    this.router.navigate(['order/confirm'])
  }

  onToppingChange(event: { checked: Array<String>; originalEvent: PointerEvent }) {
    if(event.checked.length > 3) {
      event.checked.pop();
      //@todo notify user they can only select 3 toppings
      //@bug if user tries to go back to the previous step and changed the food. can only select 2
    }
  }

}
