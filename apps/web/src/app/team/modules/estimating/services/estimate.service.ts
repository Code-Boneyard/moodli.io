import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Estimate } from '../models/estimate.model';

@Injectable()
export class EstimateService {
  constructor(private firestore: AngularFirestore) {}

  getEstimates() {
    return this.firestore.collection('estimates').snapshotChanges();
  }

  createEstimate(estimate: Estimate) {
    return this.firestore.collection('estimates').add(estimate);
  }
  updateEstimate(estimate: Estimate) {
    delete estimate.estimateId;
    this.firestore.doc('estimates/' + estimate.estimateId).update(estimate);
  }

  deleteEstimate(estimateId: string) {
    this.firestore.doc('estimates/' + estimateId).delete();
  }
}
