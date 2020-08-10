import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-nav-menu',
  templateUrl: './nav-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientNavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
