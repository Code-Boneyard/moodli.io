import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [

  {
    path: '',
    component: TeamComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'analytics',
    loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule),
    data: {
      breadcrumb: 'Analytics'
    },
    canActivate: []
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule),
    data: {
      breadcrumb: 'Calendar'
    },
    canActivate: []
  },
  {
    path: 'files',
    loadChildren: () => import('./modules/files/files.module').then(m => m.FilesModule),
    data: {
      breadcrumb: 'Files'
    },
    canActivate: []
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
    data: {
      breadcrumb: 'Reports'
    },
    canActivate: []
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule),
    data: {
      breadcrumb: 'Tasks'
    },
    canActivate: []
  },
  {
    path: 'tenants',
    loadChildren: () => import('./modules/tenants/tenants.module').then(m => m.TenantsModule),
    data: {
      breadcrumb: 'Tenants'
    },
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeamRoutes { }
