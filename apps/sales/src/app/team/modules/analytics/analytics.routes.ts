
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelingComponent } from './modules/modeling/modeling.component';
import { BenchmarkingComponent } from './modules/benchmarking/benchmarking.component';

const routes: Routes = [
  {
    path: 'modeling',
    component: ModelingComponent
  },
  {
    path: 'historical',
    loadChildren: () => import('./modules/historical/historical.module').then(m => m.HistoricalModule),
    data: {
      breadcrumb: 'Historical'
    },
  },
  {
    path: 'benchmark',
    component: BenchmarkingComponent,
    data: {
      breadcrumb: 'Benchmarking'
    },
  },
  {
    path: 'cost-indices',
    loadChildren: () => import('./modules/cost-indices/cost-indices.module').then(m => m.CostIndicesModule),
    data: {
      breadcrumb: 'Indices'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutes { }
