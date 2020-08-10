import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageAgreementsComponent } from './pages/manage-agreements/manage-agreements.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageAgreementsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsRoutes { }
