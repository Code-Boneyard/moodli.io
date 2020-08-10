import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';

import { Team } from './../../../../../../../core/models/team.model';
import { TeamService } from './../../../../../../../core/services/team.service';
import { ConfirmDeleteService } from './../../../../../../../shared/services/confirm-delete.service';

@Component({
  templateUrl: './manage-teams.component.html',
})

export class ManageTeamsComponent implements OnInit {
  teams: Team[];

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private afs: AngularFirestore, public dialog: MatDialog, public teamService: TeamService, public confirmDeleteService: ConfirmDeleteService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data.map(e => {
        return {
          id: e.payload.doc.id,
        }
      })
    });

  }
  createTeam(team: Team) {
    return this.afs.collection('teams').add(team);
  }

  getTeams() {
    return this.afs.collection('teams').snapshotChanges();
  }


}
