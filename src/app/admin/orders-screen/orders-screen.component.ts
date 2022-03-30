import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { OrderService } from 'src/app/order/order.service';
import { OrderRow } from './order-screen.type';

@Component({
  selector: 'app-orders-screen',
  templateUrl: './orders-screen.component.html',
  styleUrls: ['./orders-screen.component.css']
})
export class OrdersScreenComponent implements OnInit {

  orders!: Observable<Array<OrderRow>>;

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrderList();
  }

  onRowSelect(event: OrderRow){
    this.router.navigate([`admin/orders/${event.id}`])
  }

}
