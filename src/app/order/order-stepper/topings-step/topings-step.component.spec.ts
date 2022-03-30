import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopingsStepComponent } from './topings-step.component';

describe('TopingsStepComponent', () => {
  let component: TopingsStepComponent;
  let fixture: ComponentFixture<TopingsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopingsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopingsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
