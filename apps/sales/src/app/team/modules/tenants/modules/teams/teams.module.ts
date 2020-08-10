import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { TeamsRoutes } from './teams.routes';

import { TeamsComponent } from './teams.component';
import { TeamActivityComponent } from './widgets/team-activity/team-activity.component';
import { RouterModule } from '@angular/router';
import { NewTeamComponent } from './modals/new-team/new-team.component';
import { EditTeamComponent } from './modals/edit-team/edit-team.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TeamsRoutes],
  declarations: [
    TeamsComponent,
    TeamActivityComponent,
    NewTeamComponent,
    EditTeamComponent
  ]
})
export class TeamsModule {}
