import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private afs: AngularFirestore
  ) { }


  createNewClient(record) {
    return this.afs.collection('clients').add(record);
  }

  getClients() {
    return this.afs.collection('clients').snapshotChanges();
  }

  updateClient(recordID,record){
    this.afs.doc('clients/' + recordID).update(record);
  }

  deleteClient(record_id) {
    this.afs.doc('clients/' + record_id).delete();
  }
}