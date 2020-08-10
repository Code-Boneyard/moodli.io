import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateNavbarComponent } from './estimate-navbar.component';

describe('EstimateNavbarComponent', () => {
  let component: EstimateNavbarComponent;
  let fixture: ComponentFixture<EstimateNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
