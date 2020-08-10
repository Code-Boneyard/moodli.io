import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'client-icon-menu',
  templateUrl: './icon-menu.component.html'
})
export class ClientIconMenuComponent {
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
    window.open("https://support.moodlio.com", "_blank");
  }

  openLearning() {
    window.open("https://learning.moodlio.com", "_blank");
  }

  openDocumentation() {
    window.open("https://docs.moodlio.com", "_blank");
  }

  openSlack() {
    window.open("https://moodlio.slack.com", "_blank");
  }

}



