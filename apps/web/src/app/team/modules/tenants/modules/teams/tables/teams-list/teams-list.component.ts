import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore } from '@angular/fire/firestore';
import { TeamService } from './../../../../../../../core/services/team.service';
import { ConfirmDeleteService } from './../../../../../../../shared/services/confirm-delete.service';
import { NewTeamComponent } from '../../modals/new-team/new-team.component';

@Component({
  selector: 'team-teams-list',
  templateUrl: './teams-list.component.html',
})

export class TeamsListComponent implements OnInit {
  teams: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'name',
    'isActive',
    'edit',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public service: TeamService,
    public confirmDeleteService: ConfirmDeleteService,
  ) { }

  addTeam() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(NewTeamComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createTeam(data));
  }

  ngOnInit() {
    this.afs
      .collection<any>('teams')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.teams = new MatTableDataSource(data);
        this.teams.sort = this.sort;
        this.teams.paginator = this.paginator;
        this.teams.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.teams.filter = filterValue;
  }
}
