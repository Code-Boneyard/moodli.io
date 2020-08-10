import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstimateComponent } from './new-estimate.component';

describe('NewEstimateComponent', () => {
  let component: NewEstimateComponent;
  let fixture: ComponentFixture<NewEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
