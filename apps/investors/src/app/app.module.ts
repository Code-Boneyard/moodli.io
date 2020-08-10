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
import { CareersComponent } from './pages/careers/careers.component';
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SupportComponent } from './components/support/support.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { FeaturesPageComponent } from './pages/features/features.component';
import { SolutionsPageComponent } from './pages/solutions/solutions.component';
import { ContactSalesComponent } from './components/contact-sales/contact-sales.component';
import { InvestorsComponent } from './pages/investors/investors.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { WhyComponent } from './pages/why/why.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    CareersComponent,
    NewsComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    BannerComponent,
    RecentPostsComponent,
    PartnersComponent,
    TestimonialsComponent,
    SupportComponent,
    PricingComponent,
    FeaturesComponent,
    SolutionsComponent,
    PriceTableComponent,
    FeaturesPageComponent,
    SolutionsPageComponent,
    ContactSalesComponent,
    InvestorsComponent,
    WhyComponent,
    EnterpriseComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
