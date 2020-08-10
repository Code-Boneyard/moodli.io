import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './edit-system.component.html',
})

export class EditSystemComponent implements OnInit {
  example: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditSystemComponent>) { }

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
}
