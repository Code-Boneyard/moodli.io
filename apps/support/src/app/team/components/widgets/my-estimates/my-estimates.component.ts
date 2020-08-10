import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-my-estimates',
  templateUrl: './my-estimates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEstimatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
