import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEstimatesComponent } from './my-estimates.component';

describe('MyEstimatesComponent', () => {
  let component: MyEstimatesComponent;
  let fixture: ComponentFixture<MyEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
