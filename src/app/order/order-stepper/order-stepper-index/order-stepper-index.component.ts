import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { map, mergeMap, Subject, Subscription, takeUntil } from 'rxjs';
import { OrderService } from '../../order.service';
import { OrderStepperService } from '../order-stepper.service';

@Component({
  selector: 'app-order-stepper-index',
  templateUrl: './order-stepper-index.component.html',
  styleUrls: ['./order-stepper-index.component.css']
})
export class OrderStepperIndexComponent implements OnInit, OnDestroy {
  items: MenuItem[] = [];
  subscription: Subscription = new Subscription(); //change this
  onComponentDestroy$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private orderService: OrderService,
    private orderStepperService: OrderStepperService,
    private route: Router
  ) { }

  ngOnDestroy(): void {
    this.onComponentDestroy$.next(true)
    this.onComponentDestroy$.complete();
  }

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

    this.orderStepperService.orderComplete
      .pipe(
        mergeMap(() => {
          return this.orderService.submitOrder(
            this.orderStepperService.getTicketInformation()
          )
        }),
        takeUntil(this.onComponentDestroy$)
      )
      .subscribe(() => {
        this.route.navigate([`order/placed`])
      })

  }

}
