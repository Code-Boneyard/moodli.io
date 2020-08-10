import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectsRoutes } from './projects.routes';

import { ProjectService } from './services/project.service';

import { RecentProjectsComponent } from './components/widgets/recent-projects/recent-projects.component';
import { ActiveProjectsComponent } from './components/widgets/active-projects/active-projects.component';
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './components/modals/add-project/add-project.component';
import { EditProjectComponent } from './components/modals/edit-project/edit-project.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ProjectListComponent } from './components/tables/project-list/project-list.component';
import {  RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProjectsRoutes,
    RouterModule
  ],
  declarations: [
    ActiveProjectsComponent,
    RecentProjectsComponent,
    ProjectsComponent,
    AddProjectComponent,
    EditProjectComponent,
    ManageComponent,
    ProjectListComponent,
  ],
  providers: [
    ProjectService
  ]

})
export class ProjectsModule { }
