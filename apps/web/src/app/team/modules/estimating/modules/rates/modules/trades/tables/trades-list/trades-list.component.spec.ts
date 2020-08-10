import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesListComponent } from './trades-list.component';

describe('TradesListComponent', () => {
  let component: TradesListComponent;
  let fixture: ComponentFixture<TradesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
