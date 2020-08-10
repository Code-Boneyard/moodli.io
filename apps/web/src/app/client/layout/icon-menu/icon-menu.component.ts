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
    window.open("https://support.estibase.com", "_blank");
  }

  openLearning() {
    window.open("https://learning.estibase.com", "_blank");
  }

  openDocumentation() {
    window.open("https://docs.estibase.com", "_blank");
  }

  openSlack() {
    window.open("https://estibase.slack.com", "_blank");
  }

}



