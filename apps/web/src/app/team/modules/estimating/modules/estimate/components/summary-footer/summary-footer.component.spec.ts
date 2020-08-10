import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFooterComponent } from './summary-footer.component';

describe('SummaryFooterComponent', () => {
  let component: SummaryFooterComponent;
  let fixture: ComponentFixture<SummaryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
