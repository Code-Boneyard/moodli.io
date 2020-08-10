import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamLayoutComponent } from './team-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AuthService } from '../../core/services/auth.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { TasksComponent } from './tasks/tasks.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    TeamLayoutComponent,
    SidenavComponent,
    IconMenuComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    NotificationsComponent,
    TasksComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
  ],
  providers: [AuthService],

})
export class TeamLayoutModule { }