
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientLayoutComponent } from './client-layout.component';
import { ClientIconMenuComponent } from './icon-menu/icon-menu.component';
import { ClientNavMenuComponent } from './nav-menu/nav-menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    ClientLayoutComponent,
    ClientIconMenuComponent,
    ClientNavMenuComponent,
    NotificationsComponent,
    TasksComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,


  ],
  providers: [],

})
export class ClientLayoutModule { }
