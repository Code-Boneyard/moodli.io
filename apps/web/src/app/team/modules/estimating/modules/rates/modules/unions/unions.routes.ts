import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageUnionsComponent } from './pages/manage-unions/manage-unions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageUnionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnionsRoutes { }
