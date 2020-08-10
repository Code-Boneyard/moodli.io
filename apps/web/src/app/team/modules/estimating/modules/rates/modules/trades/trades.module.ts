import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../../../../../core/core.module';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { TradesRoutes } from './trades.routes';
import { TradesComponent } from './trades.component';
import { RouterModule } from '@angular/router';
import { EditTradeComponent } from './modals/edit-trade/edit-trade.component';
import { ManageTradesComponent } from './pages/manage-trades/manage-trades.component';
import { NewTradeComponent } from './modals/new-trade/new-trade.component';
import { TradeDetailsComponent } from './pages/trade-details/trade-details.component';
import { TradesListComponent } from './tables/trades-list/trades-list.component';


@NgModule({
  declarations: [
    TradesComponent,
    EditTradeComponent,
    ManageTradesComponent,
    NewTradeComponent,
    TradeDetailsComponent,
    TradesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    TradesRoutes,
  ],
  providers: [

  ],
  entryComponents: [
    NewTradeComponent,
    EditTradeComponent,
  ]
})
export class TradesModule { }
