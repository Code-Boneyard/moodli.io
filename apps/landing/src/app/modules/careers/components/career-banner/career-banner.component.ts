import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-career-banner',
  templateUrl: './career-banner.component.html',
  styleUrls: ['./career-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
