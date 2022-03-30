import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStepperIndexComponent } from './order-stepper-index.component';

describe('OrderStepperIndexComponent', () => {
  let component: OrderStepperIndexComponent;
  let fixture: ComponentFixture<OrderStepperIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStepperIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStepperIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
