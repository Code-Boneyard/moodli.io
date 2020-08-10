import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-my-teams',
  templateUrl: './my-teams.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
