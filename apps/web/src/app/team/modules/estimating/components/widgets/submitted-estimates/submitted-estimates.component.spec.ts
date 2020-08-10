import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedEstimatesComponent } from './submitted-estimates.component';

describe('SubmittedEstimatesComponent', () => {
  let component: SubmittedEstimatesComponent;
  let fixture: ComponentFixture<SubmittedEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
