import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';
import { CoreModule } from './../../../../../core/core.module';
import { TeamsRoutes } from './teams.routes';

import { TeamsComponent } from './teams.component';
import { TeamActivityComponent } from './widgets/team-activity/team-activity.component';
import { RouterModule } from '@angular/router';
import { NewTeamComponent } from './modals/new-team/new-team.component';
import { EditTeamComponent } from './modals/edit-team/edit-team.component';
import { ManageTeamsComponent } from './pages/manage-teams/manage-teams.component';
import { TeamsListComponent } from './tables/teams-list/teams-list.component';

import { ConfirmDeleteService } from './../../../../../shared/services/confirm-delete.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    TeamsRoutes
  ],

  declarations: [
    TeamsComponent,
    TeamActivityComponent,
    NewTeamComponent,
    EditTeamComponent,
    ManageTeamsComponent,
    TeamsListComponent
  ],
  providers: [
    ConfirmDeleteService
  ],
  entryComponents: [
    NewTeamComponent,
    EditTeamComponent
  ]
})
export class TeamsModule { }
