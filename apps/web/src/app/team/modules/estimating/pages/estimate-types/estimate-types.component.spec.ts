import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateTypesComponent } from './estimate-types.component';

describe('EstimateTypesComponent', () => {
  let component: EstimateTypesComponent;
  let fixture: ComponentFixture<EstimateTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
