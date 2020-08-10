import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './pages/overview/overview.component';
import { EstimatesComponent } from './pages/estimates/estimates.component';
import { ManagementComponent } from './pages/management/management.component';
import { DesignComponent } from './pages/design/design.component';
import { ControlsComponent } from './pages/controls/controls.component';
import { CloseoutComponent } from './pages/closeout/closeout.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [  ]
  },
  {
    path: 'estimates',
    component: EstimatesComponent,
    canActivate: [  ]
  },
  {
    path: 'management',
    component: ManagementComponent,
    canActivate: [  ]
  },
  {
    path: 'design',
    component: DesignComponent,
    canActivate: [  ]
  },
  {
    path: 'controls',
    component: ControlsComponent,
    canActivate: [  ]
  },
  {
    path: 'closeout',
    component: CloseoutComponent,
    canActivate: [  ]
  },
  {
    path: 'monitoring',
    component: MonitoringComponent,
    canActivate: [  ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDashboardRoutes { }
