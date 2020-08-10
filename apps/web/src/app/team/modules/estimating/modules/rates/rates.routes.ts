import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageRatesComponent } from './pages/manage-rates/manage-rates.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageRatesComponent,
  },
  {
    path: 'trades',
    loadChildren: () => import('./modules/trades/trades.module').then(m => m.TradesModule),
    data: {
      breadcrumb: 'Trades'
    },
  },
  {
    path: 'unions',
    loadChildren: () => import('./modules/unions/unions.module').then(m => m.UnionsModule),
    data: {
      breadcrumb: 'Trades'
    },
  },
  {
    path: 'locals',
    loadChildren: () => import('./modules/locals/locals.module').then(m => m.LocalsModule),
    data: {
      breadcrumb: 'Trades'
    },
  },
  {
    path: 'agreements',
    loadChildren: () => import('./modules/agreements/agreements.module').then(m => m.AgreementsModule),
    data: {
      breadcrumb: 'Trades'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RatesRoutes { }
