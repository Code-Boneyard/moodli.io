import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { BannerComponent } from './components/banner/banner.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { ApiDocsComponent } from './pages/api-docs/api-docs.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NewsComponent } from './pages/news/news.component';


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
    OverviewComponent,
    CaseStudiesComponent,
    ApiDocsComponent,
    SignupComponent,
    NewsComponent

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
