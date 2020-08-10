import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDetailComponent } from './pages/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './tables/invoice-list/invoice-list.component';
import { SharedModule } from './../../../../../shared/shared.module';
import { CoreModule } from './../../../../../core/core.module';
import { ManageInvoicesComponent } from './pages/manage-invoices/manage-invoices.component';



@NgModule({
  declarations: [
    InvoiceDetailComponent,
    InvoiceListComponent,
    ManageInvoicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class InvoicesModule { }
