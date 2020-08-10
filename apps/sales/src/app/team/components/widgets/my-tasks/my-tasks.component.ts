import { ConfirmDeleteService } from '../../../../shared/services/confirm-delete.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EditTaskComponent } from '../../../modules/tasks/components/modals/edit-task/edit-task.component';
import { NewTaskComponent } from '../../../modules/tasks/components/modals/new-task/new-task.component';


@Component({
  selector: 'team-my-tasks',
  templateUrl: './my-tasks.component.html',
})
export class MyTasksComponent implements OnInit {
  tasks: MatTableDataSource<any>;

  displayedColumns = [
    'description',
    'status',
    'dueDate',
    'edit',
    'delete',
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog, public confirmDeleteService: ConfirmDeleteService) { }

  addTask(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(NewTaskComponent, dialogConfig);
  }

  editTask(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditTaskComponent, dialogConfig);

  }
  deleteTask(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }


  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collectionGroup('tasks' )
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.tasks = new MatTableDataSource(data);
        this.tasks.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tasks.filter = filterValue;
  }


}