import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'team-icon-menu',
  templateUrl: './icon-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconMenuComponent {
  events: string[] = [];
  opened: boolean;
  email: string;
  password: string;


  constructor(public auth: AuthService, private afs: AngularFirestore) { }
  titles: any[];
  isShowSearch = false;

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated;
  }

  toggleSearch() {
    this.isShowSearch = !this.isShowSearch;
  }

  signOut() {
    this.auth.signOut();
  }

  openSupport() {
    window.open("https://web.moodlio.com/support", "_blank");
  }

  openDocumentation() {
    window.open("https://docs.moodlio.com", "_blank");
  }



}



