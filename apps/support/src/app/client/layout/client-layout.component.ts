import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-client-layout',
  templateUrl: './client-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
