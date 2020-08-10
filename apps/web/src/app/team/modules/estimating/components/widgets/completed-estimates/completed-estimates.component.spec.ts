import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEstimatesComponent } from './completed-estimates.component';

describe('CompletedEstimatesComponent', () => {
  let component: CompletedEstimatesComponent;
  let fixture: ComponentFixture<CompletedEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
