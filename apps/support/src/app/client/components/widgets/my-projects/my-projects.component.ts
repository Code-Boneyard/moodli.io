import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-my-projects',
  templateUrl: './my-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
