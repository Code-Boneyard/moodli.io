import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore } from '@angular/fire/firestore';
import { TaskService } from './../../../../../../core/services/task.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';
import { EditTaskComponent } from './../../../components/modals/edit-task/edit-task.component';
import { Task } from './../../../../../../core/models/task.model';

@Component({
  selector: 'team-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'description',
    'status',
    'dueDate',
    'priority',
    'isActive',
    'edit',
    'delete',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public service: TaskService,
  ) { }

  addTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(NewTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createTask(data));
  }

  editTask(task: Task) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditTaskComponent, dialogConfig);
  }

  deleteTask(task: Task) {
    this.afs.doc('users/' + task).delete();
  }

  ngOnInit() {
    this.afs
      .collection<any>('tasks')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.tasks = new MatTableDataSource(data);
        this.tasks.sort = this.sort;
        this.tasks.paginator = this.paginator;
        this.tasks.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tasks.filter = filterValue;
  }

}
