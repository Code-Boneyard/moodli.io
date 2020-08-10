import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sessions-reset-form',
  templateUrl: './reset-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
