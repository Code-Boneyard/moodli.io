import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  example: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;
  newEmail: string;


  constructor(
    private fb: FormBuilder, 
    public afs: AngularFirestore,
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
    ) { }

  ngOnInit() {
    this.exampleFormGroup = this.fb.group({
      exampleField: '',
    });
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateEmail(): void {
    this.afs.collection('users').doc(this.data.uid).update({ email: this.newEmail })
    this.dialogRef.close();
  }
}
