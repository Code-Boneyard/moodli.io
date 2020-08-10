import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { ClientsRoutes } from './clients.routes';

import { ClientsComponent } from './clients.component';
import { ActiveClientsComponent } from './components/widgets/active-clients/active-clients.component';
import { InviteComponent } from './modals/invite/invite.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ActiveClientsComponent,
    InviteComponent
  ],

  imports: [CommonModule, SharedModule, ClientsRoutes]
})
export class ClientsModule {}
