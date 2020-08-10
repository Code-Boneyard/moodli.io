import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-summary-footer',
  templateUrl: './summary-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
