import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedEstimatesComponent } from './delayed-estimates.component';

describe('DelayedEstimatesComponent', () => {
  let component: DelayedEstimatesComponent;
  let fixture: ComponentFixture<DelayedEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
