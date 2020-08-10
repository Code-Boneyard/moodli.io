import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimateComponent } from './modules/estimate/estimate.component';
import { EstimatingComponent } from './estimating.component';
import { NewEstimateComponent } from './pages/new-estimate/new-estimate.component';
import { DefaultsComponent } from './pages/defaults/defaults.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: EstimatingComponent,
    data: {
      breadcrumb: 'Overview'
    }
  },
  {
    path: 'new',
    component: NewEstimateComponent,
    data: {
      breadcrumb: 'New Estimate'
    }
  },
  {
    path: 'defaults',
    component: DefaultsComponent,
    data: {
      breadcrumb: 'Defaults'
    }
  },
  {
    path: 'database',
    loadChildren: () => import('./modules/database/database.module').then(m => m.DatabaseModule),
    data: {
      breadcrumb: 'Database'
    },
    canActivate: []
  },
  {
    path: 'rates',
    loadChildren: () => import('./modules/rates/rates.module').then(m => m.RatesModule),
    data: {
      breadcrumb: 'Rates'
    },
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EstimatingRoutes { }
