import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


interface Database {
  value: string;
  viewValue: string;
}
interface System {
  value: string;
  viewValue: string;
}


interface Estimates {
  project?: string;
  designPhase?: string;
  designProgress?: string;
}

@Component({
  selector: 'team-takeoff',
  templateUrl: './takeoff.component.html',
})
export class TakeoffComponent implements OnInit {
  activeEstimates: MatTableDataSource <any>;
  displayedColumns = [
    'project',
    'designPhase',
    "designProgress",
  ];

  database: Database[] = [
    {value: 'steak-0', viewValue: 'Item Database'},
    {value: 'pizza-1', viewValue: 'Assembly Catalog'},
    {value: 'tacos-2', viewValue: 'Cost-Per-SF Data'}
  ];
  systems: System[] = [
    {value: 'mechanical', viewValue: 'Mechanical'},
    {value: 'plumbing', viewValue: 'Plumbing'},
    {value: 'fire-protection', viewValue: 'Fire Protection'},
    {value: 'controls', viewValue: 'Building Controls'},
    {value: 'electrical', viewValue: 'Electrical'},
    {value: 'fire-alarm', viewValue: 'Fire Alarm'},
    {value: 'technology', viewValue: 'Technology'},
    {value: 'photovoltaic', viewValue: 'Photovoltaic'},
  ];


  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {

    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('estimates')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.activeEstimates = new MatTableDataSource(data);
        this.activeEstimates.sort = this.sort;
      });
  }
  // Use the filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.activeEstimates.filter = filterValue;
  }
}
