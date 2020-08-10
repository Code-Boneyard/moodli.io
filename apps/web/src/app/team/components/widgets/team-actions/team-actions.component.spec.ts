import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamActionsComponent } from './team-actions.component';

describe('TeamActionsComponent', () => {
  let component: TeamActionsComponent;
  let fixture: ComponentFixture<TeamActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
