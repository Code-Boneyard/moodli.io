
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { SystemService } from './../../../../../core/services/system.service';

import { NewSystemComponent } from '../../modals/new-system/new-system.component';
import { EditSystemComponent } from '../../modals/edit-system/edit-system.component';


@Component({
  selector: 'team-systems-list',
  templateUrl: './systems-list.component.html',
})

export class SystemsListComponent implements OnInit {
  systems: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'description',
    'edit',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public service: SystemService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
  ) { }

  addSystem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(NewSystemComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createSystem(data));
  }

  editSystem(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditSystemComponent, dialogConfig);

  }

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('systems')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.systems = new MatTableDataSource(data);
        this.systems.sort = this.sort;
        this.systems.paginator = this.paginator;
        this.systems.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.systems.filter = filterValue;
  }
}
