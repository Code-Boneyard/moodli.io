import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';
import { CoreModule } from './../../../../../core/core.module';

import { CostIndicesRoutes } from './cost-indices.routes';
import { CostIndicesComponent } from './cost-indices.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CostIndicesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    CostIndicesRoutes,
  ]
})
export class CostIndicesModule { }
