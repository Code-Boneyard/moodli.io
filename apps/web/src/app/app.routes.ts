import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { ClientLayoutComponent } from './client/layout/client-layout.component';
import { SessionsLayoutComponent } from './sessions/layout/sessions-layout.component';
import { TeamLayoutComponent } from './team/layout/team-layout.component';

import { NotFoundComponent } from './shared/components/pages/not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/pages/forbidden/forbidden.component';
import { BadGatewayComponent } from './shared/components/pages/bad-gateway/bad-gateway.component';
import { SupportComponent } from './shared/components/pages/support/support.component';
import { EstimateComponent } from './team/modules/estimating/modules/estimate/estimate.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { DownloadComponent } from './shared/components/pages/download/download.component';

const isAdmin = () => hasCustomClaim('admin');
const isTenant = () => hasCustomClaim('tenant');
const isClient = () => hasCustomClaim('client');
const redirectUnauthorized = () => redirectUnauthorizedTo(['/403']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/login',
    pathMatch: 'full',

  },
  {
    path: 'sessions',
    component: SessionsLayoutComponent,
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
    canActivate: [],
    data: { num: 1 }
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    //    canActivate: [AngularFireAuthGuard ], data: { authGuardPipe: redirectUnauthorized, isClient },
    data: { num: 2 }
  },
  {
    path: 'team',
    component: TeamLayoutComponent,
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
    //    canActivate: [AngularFireAuthGuard ], data: { authGuardPipe: redirectUnauthorized, isTenant },
    data: { num: 3 }
  },
  {
    path: 'estimate',
    component: EstimateComponent,
    loadChildren: () => import('./team/modules/estimating/modules/estimate/estimate.module').then(m => m.EstimateModule),
    data: { num: 4 },
    canActivate: []
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [],
    data: { num: 5 }
  },
  {
    path: 'support',
    component: SupportComponent,
    data: { num: 6 }
  },
  {
    path: '403',
    component: ForbiddenComponent,
    data: { num: 7 }
  },
  {
    path: 'download',
    component: DownloadComponent,
    data: { num: 8 }
  },
  {
    path: '502',
    component: BadGatewayComponent,
    data: { num: 9 }
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
    data: { num: 0 }
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes { }
