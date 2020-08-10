import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';
import { environment } from '../environments/environment.dev';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutes } from './app.routes';
import { SessionsModule } from './sessions/sessions.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { TeamModule } from './team/team.module';


import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/components/pages/not-found/not-found.component';
import { BadGatewayComponent } from './shared/components/pages/bad-gateway/bad-gateway.component';
import { ForbiddenComponent } from './shared/components/pages/forbidden/forbidden.component';
import { SupportComponent } from './shared/components/pages/support/support.component';
import { DownloadComponent } from './shared/components/pages/download/download.component';
import { ConnectionService } from './core/services/connection.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    BadGatewayComponent,
    ForbiddenComponent,
    SupportComponent,
    DownloadComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutes,
    SessionsModule,
    AdminModule,
    ClientModule,
    TeamModule,

  ],
  providers: [
    AuthService, ConnectionService, AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
