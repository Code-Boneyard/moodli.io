import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstimateTypeComponent } from './new-estimate-type.component';

describe('NewEstimateTypeComponent', () => {
  let component: NewEstimateTypeComponent;
  let fixture: ComponentFixture<NewEstimateTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEstimateTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEstimateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
