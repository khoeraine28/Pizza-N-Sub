import { Injectable } from '@angular/core';
import { OrderRow } from '../admin/orders-screen/order-screen.type';
import { FoodName } from './order-stepper/order-type/order.type';
import { ToppingOption } from './order-stepper/order-type/topping.type';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getFoodToppingOptions(food: FoodName): Array<ToppingOption> {
    //@todo fetch from api
    if(food === 'pizza') {
      return [
        { value: 'Pepperoni', label: 'Pepperoni' },
        { value: 'Mushrooms', label: 'Mushrooms' },
        { value: 'Black Olives', label: 'Black Olives' },
        { value: 'Pineapple', label: 'Pineapple' },
      ]
    }

    if(food === 'sub') {
      return [
        { value: 'Lettuce', label: 'Lettuce' },
        { value: 'Tomato', label: 'Tomato' },
        { value: 'Black Olives', label: 'Black Olives' },
        { value: 'Pineapple', label: 'Pineapple' },
      ]
    }

    return [];
  }

  getOrderList(): Array<OrderRow> {
    //@todo fetch from api
    return [
      { id: '1', customerInfo: { name: 'Wendell Soriano', phone: '09212843062' }, date: new Date() },
      { id: '2', customerInfo: { name: 'Rozil Soriano', phone: '0943849903' }, date: new Date(2022, 3, 30, 8) },
      { id: '3', customerInfo: { name: 'Amaranthine Soriano', phone: '09445567798' }, date: new Date(2022, 3, 30, 9) },
      { id: '4', customerInfo: { name: 'Buddy Soriano', phone: '09227789340' }, date: new Date(2022, 3, 30, 10) },
    ]
  }
}
