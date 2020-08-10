import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'client-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
  }

}
