import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './pages/manage/manage.component';



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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutes { }
