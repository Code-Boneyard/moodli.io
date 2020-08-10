import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-team-actions',
  templateUrl: './team-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamActionsComponent implements OnInit {

  constructor() { }
  openNewTab(url) {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
  }

}
