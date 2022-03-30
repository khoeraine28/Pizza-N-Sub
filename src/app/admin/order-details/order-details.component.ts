import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order/order-stepper/order-type/order.type';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order!: Order;

  constructor() { }

  ngOnInit(): void {
    //@todo should be fetched from api
    this.order = {
      personal: { 
        name: 'Wendell Soriano', 
        phone: '09212843062'
      },
      delivery: {
        dateTime: new Date(),
        address: 'Calzadang bayu, Porac, Pampanga',
        type: 'delivery'
      },
      food: {
        name: 'pizza',
        toppings: [
          'Pepperoni',
          'Mushrooms',
          'Black Olives',
          'Pineapple',
        ]
      }
    }
  }

}
