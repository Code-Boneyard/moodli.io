import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBillingComponent } from './modals/add-billing/add-billing.component';
import { EditBillingComponent } from './modals/edit-billing/edit-billing.component';
import { ManageBillingComponent } from './pages/manage-billing/manage-billing.component';
import { SharedModule } from 'apps/web/src/app/shared/shared.module';
import { BillingRoutes } from 'apps/web/src/app/team/modules/tenants/modules/billing/billing.routes';
import { CoreModule } from 'apps/web/src/app/core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddBillingComponent, EditBillingComponent, ManageBillingComponent],
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutes,
    CoreModule,
    RouterModule
  ]
})
export class BillingModule { }
