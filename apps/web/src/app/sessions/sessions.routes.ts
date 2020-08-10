import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AccessComponent } from './pages/access/access.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { TermsComponent } from './pages/terms/terms.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {
    path: 'access',
    component: AccessComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
  {
    path: 'set-password',
    component: SetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutes { }
