import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressStepComponent } from './delivery-address-step.component';

describe('DeliveryAddressStepComponent', () => {
  let component: DeliveryAddressStepComponent;
  let fixture: ComponentFixture<DeliveryAddressStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAddressStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
