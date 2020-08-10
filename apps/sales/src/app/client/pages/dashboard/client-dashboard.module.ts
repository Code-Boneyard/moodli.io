
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientDashboardRoutes } from './client-dashboard.routes';
import { AuthService } from '../../../core/services/auth.service';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { ClientDashboardComponent } from './client-dashboard.component';
import { ControlsComponent } from './pages/controls/controls.component';
import { DesignComponent } from './pages/design/design.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { EstimatesComponent } from './pages/estimates/estimates.component';
import { ManagementComponent } from './pages/management/management.component';
import { CloseoutComponent } from './pages/closeout/closeout.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { ClientSidenavComponent } from '../../layout/client-sidenav/client-sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    AgmCoreModule,
    ClientDashboardRoutes

  ],
  declarations: [
    ClientDashboardComponent,
    ControlsComponent,
    DesignComponent,
    OverviewComponent,
    ManagementComponent,
    EstimatesComponent,
    CloseoutComponent,
    MonitoringComponent,
    ClientSidenavComponent

  ],
  providers: [
    AuthService
  ]

})
export class ClientDashboardModule { }
