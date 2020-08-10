import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../../shared/shared.module';
import { CoreModule } from '../../../../../core/core.module';

import { ItemsModule } from './items/items.module';
import { AssembliesModule } from './assemblies/assemblies.module';
import { DatabaseRoutes } from './database.routes';
import { ManageDatabaseComponent } from './pages/manage-database/manage-database.component';


@NgModule({
  declarations: [

  ManageDatabaseComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DatabaseRoutes,
    ItemsModule,
    AssembliesModule
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class DatabaseModule { }
