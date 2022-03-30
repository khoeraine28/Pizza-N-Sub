import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Order } from './order-type/order.type';

//@todo refactor service to use type interface

@Injectable({
  providedIn: 'root'
})
export class OrderStepperService {

  constructor() {

  }

  orderInformation: Order = {
    personal: {
        name: '',
        phone: '',
    },
    delivery: {
        dateTime: new Date(),
        address: '',
        type: 'delivery',
    },
    food: {
      name: 'pizza',
      toppings: []
    }
  };

  private orderComplete = new Subject<Order>();

  getTicketInformation(): Order {
      return this.orderInformation;
  }

  setTicketInformation(ticketInformation: Order) {
      this.orderInformation = ticketInformation;
  }

  complete() {
      this.orderComplete.next(this.orderInformation);
  }
}
