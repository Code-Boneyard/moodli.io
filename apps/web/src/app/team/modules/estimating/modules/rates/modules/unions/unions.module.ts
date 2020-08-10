import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CoreModule } from './../../../../../../../core/core.module';
import { SharedModule } from '../../../../../../../shared/shared.module';

import { UnionsRoutes } from './unions.routes';
import { UnionDetailComponent } from './pages/union-detail/union-detail.component';
import { UnionsListComponent } from './tables/unions-list/unions-list.component';
import { ManageUnionsComponent } from './pages/manage-unions/manage-unions.component';



@NgModule({
  declarations: [
    UnionDetailComponent,
    UnionsListComponent,
    ManageUnionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    UnionsRoutes,
  ]
})
export class UnionsModule { }
