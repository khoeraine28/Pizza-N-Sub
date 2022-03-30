import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { OrderStepperService } from '../order-stepper.service';

@Component({
  selector: 'app-order-stepper-index',
  templateUrl: './order-stepper-index.component.html',
  styleUrls: ['./order-stepper-index.component.css']
})
export class OrderStepperIndexComponent implements OnInit {
  items: MenuItem[] = [];
    
  subscription: Subscription = new Subscription(); //change this
  constructor(private orderStepperService: OrderStepperService) { }

  ngOnInit(): void {
    
  this.items = [
    {
        label: 'Personal Information',
        routerLink: 'personal'
    },
    {
        label: 'Delivery',
        routerLink: 'delivery'
    },
    {
        label: 'Delivery Address ',
        routerLink: 'address'
    },
    {
        label: 'Food',
        routerLink: 'food'
    },
    {
      label: 'Toppings',
      routerLink: 'topings'
    },
    {
      label: 'Confirm',
      routerLink: 'confirm'
    }
  ];



  }

}
