import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInformationStepComponent } from './delivery-information-step.component';

describe('DeliveryInformationStepComponent', () => {
  let component: DeliveryInformationStepComponent;
  let fixture: ComponentFixture<DeliveryInformationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInformationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInformationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
