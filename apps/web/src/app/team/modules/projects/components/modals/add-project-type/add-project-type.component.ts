import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProjectTypeService } from './../../../../../../core/services/project-type.service';

@Component({
  templateUrl: './add-project-type.component.html',
})

export class AddProjectTypeComponent implements OnInit {
  addProjectTypeFormGroup: FormGroup;
  constructor(private projectService: ProjectTypeService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddProjectTypeComponent>) { }

  ngOnInit() {
    this.addProjectTypeFormGroup = this.fb.group({
      id: '',
      description: '',
    });
  }

  save() {
    this.dialogRef.close(this.addProjectTypeFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
