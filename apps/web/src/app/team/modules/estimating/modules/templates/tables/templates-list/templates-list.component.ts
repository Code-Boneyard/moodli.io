import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-templates-list',
  templateUrl: './templates-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplatesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
