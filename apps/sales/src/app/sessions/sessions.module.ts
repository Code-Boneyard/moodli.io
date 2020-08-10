import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionsRoutes } from './sessions.routes';
import { SessionsLayoutModule } from './layout/sessions-layout.module';

import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { TermsComponent } from './pages/terms/terms.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SessionsFooterComponent } from './components/sessions-footer/sessions-footer.component';
import { AccessComponent } from './pages/access/access.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    PrivacyComponent,
    ResetPasswordComponent,
    TermsComponent,
    VerifyComponent,
    AccessComponent,
    SessionsFooterComponent,
    SetPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SessionsRoutes,
    SessionsLayoutModule

  ],
  providers: [],

})
export class SessionsModule { }
