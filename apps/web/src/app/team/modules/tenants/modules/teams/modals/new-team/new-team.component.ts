import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './new-team.component.html',
})

export class NewTeamComponent implements OnInit {
  addTeamFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewTeamComponent>) { }

  ngOnInit() {
    this.addTeamFormGroup = this.fb.group({
      id: '',
      name: '',
      isActive: '',
    });
  }
  save() {
    this.dialogRef.close(this.addTeamFormGroup.value);
  }
  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
