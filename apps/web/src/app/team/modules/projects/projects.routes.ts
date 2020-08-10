import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './pages/manage/manage.component';
import { ProjectTypesComponent } from './pages/project-types/project-types.component';
import { MapComponent } from './pages/map/map.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: {
      breadcrumb: 'Manage Projects'
    },
  },
  {
    path: 'types',
    component: ProjectTypesComponent,
    data: {
      breadcrumb: 'Manage Projects'
    },
  },
  {
    path: 'map',
    component: MapComponent,
    data: {
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutes { }
