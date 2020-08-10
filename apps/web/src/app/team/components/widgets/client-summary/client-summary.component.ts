import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-client-summary',
  templateUrl: './client-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
