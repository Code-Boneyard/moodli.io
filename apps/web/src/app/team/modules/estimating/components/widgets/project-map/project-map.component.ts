import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-project-map',
  templateUrl: './project-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
