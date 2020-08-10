import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ClientRoutes } from './client.routes';
import { RouterModule } from '@angular/router';
import { ClientLayoutModule } from './layout/client-layout.module';
import { HomeComponent } from './pages/home/home.component';

import { CalendarComponent } from './components/widgets/calendar/calendar.component';
import { MyEstimatesComponent } from './components/widgets/my-estimates/my-estimates.component';
import { MyProjectsComponent } from './components/widgets/my-projects/my-projects.component';
import { MyTasksComponent } from './components/widgets/my-tasks/my-tasks.component';
import { MyTeamsComponent } from './components/widgets/my-teams/my-teams.component';
import { ProjectMapComponent } from './components/widgets/project-map/project-map.component';
import { RecentFilesComponent } from './components/widgets/recent-files/recent-files.component';
import { TasksModule } from './modules/tasks/tasks.module';
import { FilesModule } from './modules/files/files.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ReportsModule } from './modules/reports/reports.module';


@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
    MyEstimatesComponent,
    MyProjectsComponent,
    MyTasksComponent,
    MyTeamsComponent,
    ProjectMapComponent,
    RecentFilesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    ClientRoutes,
    ClientLayoutModule,
    TasksModule,
    FilesModule,
    ProjectsModule,
    ReportsModule
  ],
  providers: [],

})
export class ClientModule { }
