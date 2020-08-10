import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { EstimatingRoutes } from './estimating.routes';
import { RouterModule } from '@angular/router';

import { EstimatingComponent } from './estimating.component';
import { ActiveEstimatesComponent } from './components/widgets/active-estimates/active-estimates.component';
import { SubmittedEstimatesComponent } from './components/widgets/submitted-estimates/submitted-estimates.component';
import { ArchivedEstimatesComponent } from './components/widgets/archived-estimates/archived-estimates.component';
import { DelayedEstimatesComponent } from './components/widgets/delayed-estimates/delayed-estimates.component';
import { CompletedEstimatesComponent } from './components/widgets/completed-estimates/completed-estimates.component';
import { NewEstimateComponent } from './pages/new-estimate/new-estimate.component';
import { DefaultsComponent } from './pages/defaults/defaults.component';
import { EstimateTypesComponent } from './pages/estimate-types/estimate-types.component';
import { NewEstimateTypeComponent } from './components/modals/new-estimate-type/new-estimate-type.component';
import { TemplatesModule } from './modules/templates/templates.module';
import { DatabaseModule } from './modules/database/database.module';
import { RatesModule } from './modules/rates/rates.module';
import { ProjectMapComponent } from './pages/project-map/project-map.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    EstimatingRoutes,
    RouterModule,
    TemplatesModule,
    DatabaseModule,
    RatesModule
    
  ],
  declarations: [
    EstimatingComponent,
    ActiveEstimatesComponent,
    SubmittedEstimatesComponent,
    ArchivedEstimatesComponent,
    DelayedEstimatesComponent,
    CompletedEstimatesComponent,
    NewEstimateComponent,
    DefaultsComponent,
    EstimateTypesComponent,
    NewEstimateTypeComponent,
    ProjectMapComponent,
  ],

  providers: [

  ],
  entryComponents: [
    // Put Modals Here
    NewEstimateTypeComponent,
  ]

})
export class EstimatingModule { }
