import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-my-clients',
  templateUrl: './my-clients.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
