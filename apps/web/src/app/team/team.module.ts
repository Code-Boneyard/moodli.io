import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamRoutes } from './team.routes';

import { TeamLayoutModule } from './layout/team-layout.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { EstimatingModule } from './modules/estimating/estimating.module';
import { FilesModule } from './modules/files/files.module';
import { ReportsModule } from './modules/reports/reports.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SystemsModule } from './modules/systems/systems.module';

import { TimeoutService } from '../core/services/timeout.service';

import { TeamComponent } from './team.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyEstimatesComponent } from './components/widgets/my-estimates/my-estimates.component';
import { MyTeamsComponent } from './components/widgets/my-teams/my-teams.component';
import { MyProjectsComponent } from './components/widgets/my-projects/my-projects.component';
import { MyTasksComponent } from './components/widgets/my-tasks/my-tasks.component';
import { TeamActionsComponent } from './components/widgets/team-actions/team-actions.component';
import { CalendarComponent } from './components/widgets/calendar/calendar.component';
import { MyClientsComponent } from './components/widgets/my-clients/my-clients.component';
import { ClientSummaryComponent } from './components/widgets/client-summary/client-summary.component';
import { ActiveTeamMembersComponent } from './components/widgets/active-team-members/active-team-members.component';
import { EstimateSummaryComponent } from './components/widgets/estimate-summary/estimate-summary.component';
import { RecentFilesComponent } from './components/widgets/recent-files/recent-files.component';
import { ProjectMapComponent } from './components/widgets/project-map/project-map.component';


@NgModule({
  declarations: [
    TeamComponent,
    ProfileComponent,
    SettingsComponent,
    ProjectMapComponent,
    SettingsComponent,
    MyEstimatesComponent,
    MyTeamsComponent,
    MyProjectsComponent,
    MyTasksComponent,
    TeamActionsComponent,
    CalendarComponent,
    MyClientsComponent,
    ClientSummaryComponent,
    ActiveTeamMembersComponent,
    EstimateSummaryComponent,
    RecentFilesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    TeamRoutes,
    TeamLayoutModule,
    EstimatingModule,
    AnalyticsModule,
    CalendarModule,
    FilesModule,
    ReportsModule,
    TenantsModule,
    TasksModule,
    ProjectsModule,
    SystemsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk'
    })

  ],
  providers: [
    TimeoutService
  ],
  entryComponents: [
    // Put Modals Here
  ]

})
export class TeamModule { }
