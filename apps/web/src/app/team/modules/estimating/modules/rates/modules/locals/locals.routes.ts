import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLocalsComponent } from './pages/manage-locals/manage-locals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageLocalsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalsRoutes { }
