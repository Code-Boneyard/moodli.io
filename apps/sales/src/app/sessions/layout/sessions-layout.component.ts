import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sessions-footer',
  templateUrl: './sessions-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
