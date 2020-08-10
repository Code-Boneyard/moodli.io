import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  templateUrl: './team-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamLayoutComponent {

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  titles: any[];

  constructor(
    public authService: AuthService) { }
}