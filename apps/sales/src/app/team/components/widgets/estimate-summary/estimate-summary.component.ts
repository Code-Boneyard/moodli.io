import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-estimate-summary',
  templateUrl: './estimate-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstimateSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
