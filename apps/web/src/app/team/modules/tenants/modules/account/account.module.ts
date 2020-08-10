import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../../../../core/core.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { AccountRoutes } from './account.routes';

import { AuthService } from '../../../../../core/services/auth.service';
import { SubscriptionService } from './services/subscription.service';
import { StripeService } from './services/stripe.service';
import { ReceiptService } from './services/receipt.service';
import { InvoiceService } from './services/invoice.service';
import { InviteService } from './services/invite.service';
import { BillingService } from './services/billing.service';

import { SetupComponent } from './components/pages/setup/setup.component';
import { AvailableSeatsComponent } from './components/partials/available-seats/available-seats.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    AccountRoutes,
  ],
  declarations: [
    SetupComponent,
    AvailableSeatsComponent,
  ],

  providers: [
    AuthService,
    BillingService,
    InviteService,
    InvoiceService,
    ReceiptService,
    StripeService,
    SubscriptionService
  ]
})
export class AccountModule { }
