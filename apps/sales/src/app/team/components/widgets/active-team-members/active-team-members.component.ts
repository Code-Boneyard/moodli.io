import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-active-team-members',
  templateUrl: './active-team-members.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveTeamMembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
