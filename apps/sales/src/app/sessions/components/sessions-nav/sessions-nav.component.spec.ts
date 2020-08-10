import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsNavComponent } from './sessions-nav.component';

describe('SessionsNavComponent', () => {
  let component: SessionsNavComponent;
  let fixture: ComponentFixture<SessionsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
