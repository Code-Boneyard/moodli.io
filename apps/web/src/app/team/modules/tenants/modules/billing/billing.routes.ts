

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { RecentPaymentsComponent } from './pages/recent-payments/recent-payments.component';
import { MakePaymentComponent } from './pages/make-payment/make-payment.component';
import { AddPaymentMethodComponent } from './modals/add-payment-method/add-payment-method.component';
import { UpgradeSubscriptionComponent } from './pages/upgrade-subscription/upgrade-subscription.component';
import { ManagePaymentMethodComponent } from './pages/manage-payment-method/manage-payment-method.component';

const routes: Routes = [
  { path: '', component: BillingComponent },
  { path: 'manage-payment-methods', component: ManagePaymentMethodComponent },
  { path: 'add-payment-method', component: AddPaymentMethodComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'make-payment', component: MakePaymentComponent },
  { path: 'recent-payments', component: RecentPaymentsComponent },
  { path: 'upgrade', component: UpgradeSubscriptionComponent },
//  { path: 'budgets', loadChildren: () => import('./budgets/budgets.module').then(m => m.ActivationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutes { }
