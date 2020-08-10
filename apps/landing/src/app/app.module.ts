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
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SupportComponent } from './components/support/support.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { ContactSalesComponent } from './components/contact-sales/contact-sales.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { DemoRequestComponent } from './pages/demo-request/demo-request.component';
import { SolutionsModule } from './modules/solutions/solutions.module';
import { FeaturesModule } from './modules/features/features.module';
import { CareersModule } from './modules/careers/careers.module';
import { DownloadComponent } from './pages/download/download.component';
import { FreeTrialComponent } from './pages/free-trial/free-trial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    NewsComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    RecentPostsComponent,
    PartnersComponent,
    TestimonialsComponent,
    SupportComponent,
    PricingComponent,
    FeaturesComponent,
    SolutionsComponent,
    PriceTableComponent,
    ContactSalesComponent,
    EnterpriseComponent,
    ReleasesComponent,
    DemoRequestComponent,
    DownloadComponent,
    FreeTrialComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule,
    AppRoutes,
    SolutionsModule,
    FeaturesModule,
    CareersModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
