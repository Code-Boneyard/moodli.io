import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { AnalyticsRoutes } from './analytics.routes';

import { ModelingComponent } from './modules/modeling/modeling.component';
import { BenchmarkingComponent } from './modules/benchmarking/benchmarking.component';
import { ManageBenchmarksComponent } from './modules/benchmarking/pages/manage-benchmarks/manage-benchmarks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AnalyticsRoutes,
  ],
  declarations: [
    ModelingComponent,
    BenchmarkingComponent,
    ManageBenchmarksComponent,
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class AnalyticsModule { }
