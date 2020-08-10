import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../../shared/shared.module';
import { CoreModule } from './../../../../../../core/core.module';

import { AssembliesRoutes } from './assemblies.routes';

import { AddAssemblyComponent } from './modals/add-assembly/add-assembly.component';
import { EditAssemblyComponent } from './modals/edit-assembly/edit-assembly.component';
import { ManageAssembliesComponent } from './pages/manage-assemblies/manage-assemblies.component';
import { AssembliesListComponent } from './tables/assemblies-list/assemblies-list.component';
import { ComponentsListComponent } from './tables/components-list/components-list.component';
import { AssemblyCatalogComponent } from './pages/assembly-catalog/assembly-catalog.component';
import { EditColumnsComponent } from './modals/edit-columns/edit-columns.component';
import { RouterModule } from '@angular/router';
import { AssemblyDetailComponent } from './pages/assembly-detail/assembly-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    AssembliesRoutes,
    RouterModule,
    CoreModule
  ],

  declarations: [
    AddAssemblyComponent,
    EditAssemblyComponent,
    ManageAssembliesComponent,
    AssembliesListComponent,
    ComponentsListComponent,
    AssemblyCatalogComponent,
    EditColumnsComponent,
    AssemblyDetailComponent,
  ],
  entryComponents: [
    EditColumnsComponent,
    AddAssemblyComponent,
    EditAssemblyComponent,
  ]
})
export class AssembliesModule {}
