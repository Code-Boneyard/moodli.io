import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-assemblies-list',
  templateUrl: './assemblies-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssembliesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
