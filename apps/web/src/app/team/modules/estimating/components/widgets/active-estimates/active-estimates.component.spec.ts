import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEstimatesComponent } from './active-estimates.component';

describe('ActiveEstimatesComponent', () => {
  let component: ActiveEstimatesComponent;
  let fixture: ComponentFixture<ActiveEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
