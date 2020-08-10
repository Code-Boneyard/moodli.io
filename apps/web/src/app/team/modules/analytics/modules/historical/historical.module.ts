import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { HistoricalRoutes } from './historical.routes';

import { HistoricalComponent } from './historical.component';
import { OverviewComponent } from './overview/overview.component';
import { CoreModule } from './../../../../../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HistoricalComponent,
    OverviewComponent,
  ],

  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    HistoricalRoutes,
  ]
})
export class HistoricalModule { }
