import { NgModule } from '@angular/core';
import { CoreModule } from '../../../../../core/core.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SetupModule } from './pages/setup/setup.module';
import { BreakdownComponent } from './pages/breakdown/breakdown.component';
import { DirectLaborComponent } from './pages/direct-labor/direct-labor.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { GroupExtensionComponent } from './pages/extension/group-extension/group-extension.component';
import { ExtensionComponent } from './pages/extension/extension.component';
import { FinalPricingComponent } from './pages/final-pricing/final-pricing.component';
import { GeneralExpensesComponent } from './pages/general-expenses/general-expenses.component';
import { IncidentalLaborComponent } from './pages/incidental-labor/incidental-labor.component';
import { IndirectLaborComponent } from './pages/indirect-labor/indirect-labor.component';
import { LaborColumnComponent } from './pages/labor-column/labor-column.component';
import { LaborEscalationComponent } from './pages/labor-escalation/labor-escalation.component';
import { LaborFactorComponent } from './pages/labor-factor/labor-factor.component';
import { ManageEstimateComponent } from './pages/manage-estimate/manage-estimate.component';
import { QuotedMaterialsComponent } from './pages/quoted-materials/quoted-materials.component';
import { SubcontractorsComponent } from './pages/subcontractors/subcontractors.component';
import { TakeoffComponent } from './pages/takeoff/takeoff.component';
import { DatabaseSidenavComponent } from './pages/takeoff/database-sidenav/database-sidenav.component';
import { EstimateComponent } from './estimate.component';
import { EstimateRoutes } from './estimate.routes';
import { EstimateNavbarComponent } from './components/estimate-navbar/estimate-navbar.component';
import { SummaryFooterComponent } from './components/summary-footer/summary-footer.component';
import { ClientAccessComponent } from './pages/client-access/client-access.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';


@NgModule({
  declarations: [
    BreakdownComponent,
    DirectLaborComponent,
    EquipmentComponent,
    GroupExtensionComponent,
    ExtensionComponent,
    FinalPricingComponent,
    GeneralExpensesComponent,
    IncidentalLaborComponent,
    IndirectLaborComponent,
    LaborColumnComponent,
    LaborEscalationComponent,
    LaborFactorComponent,
    ManageEstimateComponent,
    QuotedMaterialsComponent,
    SubcontractorsComponent,
    TakeoffComponent,
    DatabaseSidenavComponent,
    EstimateComponent,
    EstimateNavbarComponent,
    SummaryFooterComponent,
    ClientAccessComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    SetupModule,
    RouterModule,
    EstimateRoutes
  ],
  providers: [],
  entryComponents: [
    // Put Modals Here
  ]

})
export class EstimateModule { }
