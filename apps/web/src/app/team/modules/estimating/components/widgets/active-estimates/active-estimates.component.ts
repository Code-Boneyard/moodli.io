import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'team-active-estimates',
  templateUrl: './active-estimates.component.html',
})
export class ActiveEstimatesComponent implements OnInit {
  estimates: MatTableDataSource<any>;
  displayedColumns = [
    'estimateNumber',
    'issuance',
    'package',
    'projectName',
    'location',
    'lastModified',
    'client',
    'value',
    'size',
    'actions'
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('estimates', ref => ref.where('status', '==', 'active'))
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.estimates = new MatTableDataSource(data);
        this.estimates.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.estimates.filter = filterValue;
  }


}