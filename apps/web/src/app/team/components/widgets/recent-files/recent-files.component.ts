import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-recent-files',
  templateUrl: './recent-files.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
