import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SolutionsPageComponent } from './pages/solutions/solutions.component';
import { FeaturesPageComponent } from './pages/features/features.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CareersComponent } from './pages/careers/careers.component';
import { InvestorsComponent } from './pages/investors/investors.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { WhyComponent } from './pages/why/why.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'why',
    component: WhyComponent
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent
  },
  {
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'features',
    component: FeaturesPageComponent
  },
  {
    path: 'solutions',
    component: SolutionsPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'investors',
    component: InvestorsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutes { }
