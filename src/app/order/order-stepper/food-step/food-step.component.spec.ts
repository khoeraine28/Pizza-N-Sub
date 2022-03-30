import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStepComponent } from './food-step.component';

describe('FoodStepComponent', () => {
  let component: FoodStepComponent;
  let fixture: ComponentFixture<FoodStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
