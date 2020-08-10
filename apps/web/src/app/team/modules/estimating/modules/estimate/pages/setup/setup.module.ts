import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../../../../../core/core.module';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { WbsComponent } from './wbs/wbs.component';
import { EstimateInfoComponent } from './estimate-info/estimate-info.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SystemsComponent } from './systems/systems.component';
import { ContractBuilderComponent } from './contract-builder/contract-builder.component';
import { TradesComponent } from './trades/trades.component';
import { SetupComponent } from './setup.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],

  declarations: [
    SetupComponent,
    ProjectInfoComponent,
    DocumentationComponent,
    EstimateInfoComponent,
    ContractBuilderComponent,
    QualificationsComponent,
    TradesComponent,
    WbsComponent,
    SystemsComponent
  ]
})
export class SetupModule { }
