import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-project-map',
  templateUrl: './project-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectMapComponent {
  lat: number = 37.7749;
  lng: number = -122.4194;
}
