import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { SubscriptionsRoutes } from './subscriptions.routes';

import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionListComponent } from './tables/subscription-list/subscription-list.component';
import { NewSubscriptionComponent } from './modals/new-subscription/new-subscription.component';
import { EditSubscriptionComponent } from './modals/edit-subscription/edit-subscription.component';
import { SubscriptionDetailsComponent } from './pages/subscription-details/subscription-details.component';

@NgModule({
  imports: [CommonModule, SharedModule, SubscriptionsRoutes],

  declarations: [
    SubscriptionsComponent,
    NewSubscriptionComponent,
    EditSubscriptionComponent,
    SubscriptionDetailsComponent,
    SubscriptionListComponent
  ]
})
export class SubscriptionsModule {}
