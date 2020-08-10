import { Routes, RouterModule } from '@angular/router';

import { TenantsComponent } from './tenants.component';

const routes: Routes = [
  {
    path: '',
    component: TenantsComponent
  },
  {
    path: 'subscription',
    loadChildren: () => import('./modules/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule),
    data: {
      breadcrumb: 'Subscription'
  },
  },
  {
    path: 'billing',
    loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule),
    data: {
      breadcrumb: 'Billing'
  },
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/teams.module').then(m => m.TeamsModule),
    data: {
      breadcrumb: 'Teams'
  },
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/tenant-settings/tenant-settings.module').then(m => m.TenantSettingsModule),
    data: {
      breadcrumb: 'Settings'
  },
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule),
    data: {
      breadcrumb: 'Clients'
  },
  },
];

export const TenantsRoutes = RouterModule.forChild(routes);
