import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateSummaryComponent } from './estimate-summary.component';

describe('EstimateSummaryComponent', () => {
  let component: EstimateSummaryComponent;
  let fixture: ComponentFixture<EstimateSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
