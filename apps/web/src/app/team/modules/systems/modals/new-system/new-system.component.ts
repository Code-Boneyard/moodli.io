import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SystemService } from './../../../../../core/services/system.service';

@Component({
  templateUrl: './new-system.component.html',
})

export class NewSystemComponent implements OnInit {
  newSystemFormGroup: FormGroup;

  constructor(
    private systemService: SystemService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewSystemComponent>
  ) { }

  ngOnInit() {
    this.newSystemFormGroup = this.fb.group({
      id: '',
      description: '',
    });
  }

  save() {
    this.dialogRef.close(this.newSystemFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
