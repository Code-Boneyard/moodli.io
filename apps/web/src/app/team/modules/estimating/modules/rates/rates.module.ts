import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../../../core/core.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { TradesModule } from './modules/trades/trades.module';
import { AgreementsModule } from './modules/agreements/agreements.module';
import { UnionsModule } from './modules/unions/unions.module';
import { LocalsModule } from './modules/locals/locals.module';
import { RatesRoutes } from './rates.routes';

import { ManageRatesComponent } from './pages/manage-rates/manage-rates.component';
import { ClassificationsModule } from './modules/classifications/classifications.module';


@NgModule({
  declarations: [
  ManageRatesComponent
],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RatesRoutes,
    RouterModule,
    TradesModule,
    LocalsModule,
    UnionsModule,
    AgreementsModule,
    ClassificationsModule
  ],
  providers: [
    
  ],
  entryComponents: [
    // Put Modals Here
  ]

})
export class RatesModule {}
