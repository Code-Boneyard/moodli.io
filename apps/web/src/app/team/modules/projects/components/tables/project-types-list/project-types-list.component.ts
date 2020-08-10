
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';


import { EditProjectComponent } from '../../modals/edit-project/edit-project.component';
import { ConfirmDeleteService } from '../../../../../../shared/services/confirm-delete.service';
import { ProjectTypeService } from './../../../../../../core/services/project-type.service';
import { MatPaginator } from '@angular/material/paginator';
import { AddProjectTypeComponent } from '../../modals/add-project-type/add-project-type.component';

@Component({
  selector: 'team-project-types-list',
  templateUrl: './project-types-list.component.html',
})

export class ProjectTypesListComponent implements OnInit {
  projectTypes: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'description',
    'edit',
    'delete',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public service: ProjectTypeService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public confirmDeleteService: ConfirmDeleteService
  ) { }

  addProjectType(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddProjectTypeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createProjectType(data));
  }

  editProjectType(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditProjectComponent, dialogConfig);

  }
  deleteProjectType(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }


  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('projectTypes')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.projectTypes = new MatTableDataSource(data);
        this.projectTypes.sort = this.sort;
        this.projectTypes.paginator = this.paginator;
        this.projectTypes.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.projectTypes.filter = filterValue;
  }


}