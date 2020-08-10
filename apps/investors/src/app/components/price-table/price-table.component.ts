import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
