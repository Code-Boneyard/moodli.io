import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-project-map',
  templateUrl: './project-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectMapComponent {
  lat: 37.7857;
  lng: -122.4194;
}
