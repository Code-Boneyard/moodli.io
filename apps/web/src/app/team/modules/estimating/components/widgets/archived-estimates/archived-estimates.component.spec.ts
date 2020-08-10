import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedEstimatesComponent } from './archived-estimates.component';

describe('ArchivedEstimatesComponent', () => {
  let component: ArchivedEstimatesComponent;
  let fixture: ComponentFixture<ArchivedEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
