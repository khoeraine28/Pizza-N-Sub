import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/order/order-stepper/order-type/order.type';
import { OrderService } from 'src/app/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order!: Observable<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const selectedOrder: string = this.route.snapshot.paramMap.get(`orderId`) || '';
    this.order = this.orderService.getOrder(selectedOrder)
  }

}
