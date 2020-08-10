import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsFooterComponent } from './sessions-footer.component';

describe('SessionsFooterComponent', () => {
  let component: SessionsFooterComponent;
  let fixture: ComponentFixture<SessionsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
