import { CareersRoutes } from './careers.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';
import { CareerBannerComponent } from './components/career-banner/career-banner.component';
import { CareerHeroComponent } from './components/career-hero/career-hero.component';
import { OpeningsComponent } from './pages/openings/openings.component';



@NgModule({
  declarations: [
    CareersComponent,
    CareerBannerComponent,
    CareerHeroComponent,
    OpeningsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CareersRoutes
  ]
})
export class CareersModule { }
