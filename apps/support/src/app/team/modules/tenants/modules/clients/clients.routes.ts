import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { InviteComponent } from './modals/invite/invite.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'invite', component: InviteComponent,
  data: {
    breadcrumb: 'Invite Client'
},},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutes { }
