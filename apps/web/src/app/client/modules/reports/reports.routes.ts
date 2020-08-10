import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { VarianceComponent } from './components/pages/variance/variance.component';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';
import { CustomComponent } from './components/pages/custom/custom.component';
import { TrendComponent } from './components/pages/trend/trend.component';


const routes: Routes = [

  {
    path: '',
    component: ReportsComponent,
  },
  {
    path: 'trends',
    component: TrendComponent,
    data: {
      breadcrumb: 'Cost Trend'
    },
  },
  {
    path: 'custom',
    component: CustomComponent,
    data: {
      breadcrumb: 'Custom Reports'
    },
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    data: {
      breadcrumb: 'Preferences'
    },
  },
  {
    path: 'variance',
    component: VarianceComponent,
    data: {
      breadcrumb: 'Cost Variance'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutes { }
