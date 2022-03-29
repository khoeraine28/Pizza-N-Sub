import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-order-stepper',
  templateUrl: './order-stepper.component.html',
  styleUrls: ['./order-stepper.component.css']
})
export class OrderStepperComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
  }

}
