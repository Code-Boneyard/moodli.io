import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostModelingComponent } from './cost-modeling.component';

describe('CostModelingComponent', () => {
  let component: CostModelingComponent;
  let fixture: ComponentFixture<CostModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
