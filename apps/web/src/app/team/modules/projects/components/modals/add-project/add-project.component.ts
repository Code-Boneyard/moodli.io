import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from './../../../../../../core/services/project.service';

@Component({
  templateUrl: './add-project.component.html',
})

export class AddProjectComponent implements OnInit {
  addProjectFormGroup: FormGroup;

  constructor(private projectService: ProjectService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddProjectComponent>) { }

  ngOnInit() {
    this.addProjectFormGroup = this.fb.group({
      id: '',
      name: '',
      isActive: '',
      status: '',
    });
  }

  save() {
    this.dialogRef.close(this.addProjectFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
