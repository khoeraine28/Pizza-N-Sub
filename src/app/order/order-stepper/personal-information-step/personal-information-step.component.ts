import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStepperService } from '../order-stepper.service';
import { PersonalInformation } from '../order-type/order.type';

@Component({
  selector: 'app-personal-information-step',
  templateUrl: './personal-information-step.component.html',
  styleUrls: ['./personal-information-step.component.css']
})
export class PersonalInformationStepComponent implements OnInit {
  personalInformation!: PersonalInformation;

  constructor(
    private router: Router,
    private orderStepperService: OrderStepperService
  ) { }

  ngOnInit(): void {
    this.personalInformation = this.orderStepperService.getTicketInformation().personal
  }

  nextPage(){
    this.router.navigate(['order/delivery'])
  }

}
