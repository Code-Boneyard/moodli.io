import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from './../../../../../../core/services/task.service';

@Component({
  templateUrl: './new-task.component.html',
})

export class NewTaskComponent implements OnInit {
  addTaskFormGroup: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewTaskComponent>) { }

  ngOnInit() {
    this.addTaskFormGroup = this.fb.group({
      id: '',
      dueDate: '',
      description: '',
      status: '',
      isActive: '',
      priority: '',
    });
  }

  save() {
    this.dialogRef.close(this.addTaskFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
