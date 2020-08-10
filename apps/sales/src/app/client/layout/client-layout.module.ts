import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientLayoutComponent } from './client-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';




@NgModule({
  declarations: [
    ClientLayoutComponent,
    NavbarComponent,
    IconMenuComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,


  ],
  providers: [],

})
export class ClientLayoutModule {}
