import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CoreModule } from './../../../../../../../core/core.module';
import { SharedModule } from '../../../../../../../shared/shared.module';

import { LocalsRoutes } from './locals.routes';
import { EditLocalComponent } from './modals/edit-local/edit-local.component';
import { LocalDetailsComponent } from './pages/local-details/local-details.component';
import { ManageLocalsComponent } from './pages/manage-locals/manage-locals.component';
import { NewLocalComponent } from './modals/new-local/new-local.component';
import { LocalsListComponent } from './tables/locals-list/locals-list.component';



@NgModule({
  declarations: [
    EditLocalComponent,
    LocalDetailsComponent,
    ManageLocalsComponent,
    NewLocalComponent,
    LocalsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    LocalsRoutes,
  ],
  entryComponents: [
    EditLocalComponent,
    NewLocalComponent,
  ]
})
export class LocalsModule { }
