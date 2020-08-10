import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostIndicesComponent } from './cost-indices.component';

describe('CostIndicesComponent', () => {
  let component: CostIndicesComponent;
  let fixture: ComponentFixture<CostIndicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostIndicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
