import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminActionsComponent } from './components/admin-actions/admin-actions.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavComponent,
    AdminActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule
  ]
})
export class AdminLayoutModule { }
