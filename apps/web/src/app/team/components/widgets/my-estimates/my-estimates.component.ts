import { ConfirmDeleteService } from '../../../../shared/services/confirm-delete.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'team-my-estimates',
  templateUrl: './my-estimates.component.html',
})
export class MyEstimatesComponent implements OnInit {
  estimates: MatTableDataSource<any>;

  displayedColumns = [
    'projectName',
    'issuance',
    'client',
    'edit',
    'delete',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog, public confirmDeleteService: ConfirmDeleteService) { }



  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collectionGroup('estimates')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.estimates = new MatTableDataSource(data);
        this.estimates.sort = this.sort;
        this.estimates.paginator = this.paginator;
        this.estimates.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.estimates.filter = filterValue;
  }


}