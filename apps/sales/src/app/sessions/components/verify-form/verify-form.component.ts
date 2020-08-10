import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sessions-verify-form',
  templateUrl: './verify-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
