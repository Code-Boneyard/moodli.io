import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './components/support/support.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AccountComponent } from './pages/account/account.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { EstimatingComponent } from './pages/modules/pages/estimating/estimating.component';
import { CostModelingComponent } from './pages/modules/pages/cost-modeling/cost-modeling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    BannerComponent,
    SupportComponent,
    SidenavComponent,
    GettingStartedComponent,
    ModulesComponent,
    QuickStartComponent,
    AccountComponent,
    VideosComponent,
    CoursesComponent,
    TutorialsComponent,
    LessonsComponent,
    EstimatingComponent,
    CostModelingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
