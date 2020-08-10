import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CareersComponent } from './modules/careers/careers.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { DemoRequestComponent } from './pages/demo-request/demo-request.component';
import { DownloadComponent } from './pages/download/download.component';
import { FreeTrialComponent } from './pages/free-trial/free-trial.component';


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
    path: 'enterprise',
    component: EnterpriseComponent
  },
  {
    path: 'features',
    loadChildren: () => import('./modules/features/features.module').then(m => m.FeaturesModule),
  },
  {
    path: 'solutions',
    loadChildren: () => import('./modules/solutions/solutions.module').then(m => m.SolutionsModule),
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
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'releases',
    component: ReleasesComponent
  },
  {
    path: 'demo',
    component: DemoRequestComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'trial',
    component: FreeTrialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutes { }
