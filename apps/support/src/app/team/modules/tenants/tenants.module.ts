import { SupportModule } from './modules/support/support.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { TenantsRoutes } from './tenants.routes';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { BillingModule } from './modules/billing/billing.module';
import { AuthService } from './../../../core/services/auth.service';

import { TenantsComponent } from './tenants.component';
import { TeamsModule } from './modules/teams/teams.module';
import { RouterModule } from '@angular/router';
import { ClientsModule } from './modules/clients/clients.module';
import { AccountModule } from './modules/account/account.module';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    TenantsRoutes,
    TeamsModule,
    SubscriptionsModule,
    BillingModule,
    ClientsModule,
    SupportModule,
    AccountModule
  ],
  declarations: [
    TenantsComponent
  ],
  providers: [
    AuthService
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class TenantsModule { }
