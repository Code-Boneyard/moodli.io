import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SolutionsRoutes } from './solutions.routes';
import { SolutionsPageComponent } from './solutions.component';



@NgModule({
  declarations: [
    SolutionsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SolutionsRoutes
  ]
})
export class SolutionsModule { }
