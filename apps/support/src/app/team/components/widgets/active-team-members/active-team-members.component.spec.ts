import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTeamMembersComponent } from './active-team-members.component';

describe('ActiveTeamMembersComponent', () => {
  let component: ActiveTeamMembersComponent;
  let fixture: ComponentFixture<ActiveTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
