import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemsComponent } from './systems.component';
import { EditSystemComponent } from './modals/edit-system/edit-system.component';
import { NewSystemComponent } from './modals/new-system/new-system.component';
import { SystemDetailsComponent } from './pages/system-details/system-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'edit', component: EditSystemComponent },
  { path: 'manage', component: SystemsComponent },
  { path: 'new', component: NewSystemComponent },
  { path: 'details', component: SystemDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsRoutes { }
