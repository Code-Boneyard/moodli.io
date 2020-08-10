import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';

import { AddProjectComponent } from '../../modals/add-project/add-project.component';
import { EditProjectComponent } from '../../modals/edit-project/edit-project.component';
import { ConfirmDeleteService } from '../../../../../../shared/services/confirm-delete.service';
import { ProjectService } from './../../../../../../core/services/project.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'team-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  projects: MatTableDataSource<any>;
  displayedColumns = [
    'projectName',
    'status',
    'edit',
    'delete',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public service: ProjectService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public confirmDeleteService: ConfirmDeleteService
  ) { }

  addProject(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddProjectComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createProject(data));
  }

  editProject(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditProjectComponent, dialogConfig);

  }
  deleteProject(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }


  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('projects')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.projects = new MatTableDataSource(data);
        this.projects.sort = this.sort;
        this.projects.paginator = this.paginator;
        this.projects.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.projects.filter = filterValue;
  }


}