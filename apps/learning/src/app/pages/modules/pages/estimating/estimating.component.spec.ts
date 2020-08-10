import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatingComponent } from './estimating.component';

describe('EstimatingComponent', () => {
  let component: EstimatingComponent;
  let fixture: ComponentFixture<EstimatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
