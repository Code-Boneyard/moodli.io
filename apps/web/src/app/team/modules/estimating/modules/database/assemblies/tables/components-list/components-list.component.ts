import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-components-list',
  templateUrl: './components-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
