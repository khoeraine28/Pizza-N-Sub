import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { OrderRow } from '../admin/orders-screen/order-screen.type';
import { FoodName, Order } from './order-stepper/order-type/order.type';
import { ToppingOption } from './order-stepper/order-type/topping.type';

//@todo api endpoints should not be hardcoded
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

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

  submitOrder(order: Order): Observable<any>{
    console.log("test")
    return this.http.post<any>(`http://localhost:8080/orders`, {
      customerName: order.personal.name,
      contact: order.personal.phone,
      deliveryDate: order.delivery.dateTime,
      deliveryAddress: order.delivery.address,
      type: order.delivery.type,
      food: order.food.name,
      toppings: order.food.toppings.join(",")
    })
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get(`http://localhost:8080/orders/${id}`)
      .pipe(
        map((order: any): Order => ({
          personal: {
            name: order.customerName,
            phone: order.contact
          },
          delivery: {
            dateTime: new Date(order.deliveryDate),
            address: order.deliveryAddress,
            type: order.type
          },
          food: {
            name: order.food,
            toppings: order.toppings.split(",").map((a: string) => a.trim())
          }
        }))
      )
  }

  getOrderList(): Observable<Array<OrderRow>> {
    return this.http.get(`http://localhost:8080/orders`)
      .pipe(
        map((res: any): Array<OrderRow> => (
          res.map((order: any) => ({ 
            id: order.id, 
            customerInfo: { 
              name: order.customerName, 
              phone: order.contact }, 
            date: new Date(order.deliveryDate) 
          }))
        ))
      )
  }
}
