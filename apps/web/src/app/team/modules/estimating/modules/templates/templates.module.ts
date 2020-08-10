import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesListComponent } from './tables/templates-list/templates-list.component';
import { ManageTemplatesComponent } from './pages/manage-templates/manage-templates.component';
import { TemplateBuilderComponent } from './pages/template-builder/template-builder.component';
import { EditColumnsComponent } from './modals/edit-columns/edit-columns.component';
import { SharedModule } from './../../../../../shared/shared.module';
import { CoreModule } from './../../../../../core/core.module';



@NgModule({
  declarations: [
    TemplatesListComponent, 
    ManageTemplatesComponent, 
    TemplateBuilderComponent, 
    EditColumnsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class TemplatesModule { }
