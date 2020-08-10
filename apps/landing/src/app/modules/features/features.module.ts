import { FeaturesRoutes } from './features.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FeaturesPageComponent } from './features.component';



@NgModule({
  declarations: [
    FeaturesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FeaturesRoutes
  ]
})
export class FeaturesModule { }
