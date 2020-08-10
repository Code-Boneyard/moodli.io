import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SystemsRoutes } from './systems.routes';
import { SystemsComponent } from './systems.component';
import { EditSystemComponent } from './modals/edit-system/edit-system.component';
import { NewSystemComponent } from './modals/new-system/new-system.component';
import { SystemDetailsComponent } from './pages/system-details/system-details.component';
import { CoreModule } from '../../../core/core.module';
import { SystemsListComponent } from './tables/systems-list/systems-list.component';


@NgModule({
  declarations: [
    SystemsComponent,
    EditSystemComponent,
    NewSystemComponent,
    SystemDetailsComponent,
    SystemsListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    SystemsRoutes,
  ],
  entryComponents: [
    NewSystemComponent
  ]
})
export class SystemsModule { }
