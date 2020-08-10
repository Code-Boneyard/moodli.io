import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'moodlio-tenant-details',
  templateUrl: './tenant-details.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TenantDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
