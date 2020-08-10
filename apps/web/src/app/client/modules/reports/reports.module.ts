import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ReportsRoutes } from './reports.routes';

import { ReportService } from './services/report.service';
import { ReportsComponent } from './reports.component';
import { VarianceComponent } from './components/pages/variance/variance.component';
import { TrendComponent } from './components/pages/trend/trend.component';
import { CustomComponent } from './components/pages/custom/custom.component';
import { PreferencesComponent } from './components/pages/preferences/preferences.component';

@NgModule({
  declarations: [
    ReportsComponent,
    VarianceComponent,
    TrendComponent,
    CustomComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutes
  ],
  providers: [
    ReportService
  ]
})
export class ReportsModule { }
