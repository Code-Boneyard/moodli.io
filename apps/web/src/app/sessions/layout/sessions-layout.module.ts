import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionsLayoutComponent } from './sessions-layout.component';
import { SessionsNavComponent } from '../components/sessions-nav/sessions-nav.component';
import { CarouselComponent } from '../components/carousel/carousel.component';


@NgModule({
  declarations: [
    SessionsLayoutComponent,
    SessionsNavComponent,
    CarouselComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [],

})
export class SessionsLayoutModule {}
