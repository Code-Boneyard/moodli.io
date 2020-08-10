import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../../../../../core/core.module';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { ManageAgreementsComponent } from './pages/manage-agreements/manage-agreements.component';
import { AgreementsRoutes } from './agreements.routes';
import { NewAgreementComponent } from './modals/new-agreement/new-agreement.component';
import { EditAgreementComponent } from './modals/edit-agreement/edit-agreement.component';
import { AgreementsListComponent } from './tables/agreements-list/agreements-list.component';


@NgModule({
  declarations: [
    ManageAgreementsComponent,
    NewAgreementComponent,
    EditAgreementComponent,
    AgreementsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    AgreementsRoutes,
    RouterModule,
  ],
  providers: [

  ],
  entryComponents: [
    NewAgreementComponent,
    EditAgreementComponent
  ]

})
export class AgreementsModule { }
