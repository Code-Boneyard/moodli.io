import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './add-project.component.html',
})
export class AddProjectComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddProjectComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
