import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../../../../core/core.module';
import { SharedModule } from '../../../../../../shared/shared.module';

import { ConfirmDeleteService } from '../../../../../../shared/services/confirm-delete.service';

import { ItemsRoutes } from './items.routes';
import { ItemBrowserComponent } from './components/item-browser/item-browser.component';
import { NewItemComponent } from './modals/new-item/new-item.component';
import { EditItemComponent } from './modals/edit-item/edit-item.component';
import { ManageItemsComponent } from './pages/manage-items/manage-items.component';
import { ItemsListComponent } from './tables/items-list/items-list.component';
import { ItemViewerComponent } from './components/item-viewer/item-viewer.component';
import { EditColumnsComponent } from './modals/edit-columns/edit-columns.component';
import { RouterModule } from '@angular/router';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ItemsRoutes,
    RouterModule
  ],

  declarations: [
    ItemBrowserComponent,
    NewItemComponent,
    EditItemComponent,
    ManageItemsComponent,
    ItemsListComponent,
    ItemViewerComponent,
    EditColumnsComponent,
    ItemDetailComponent
  ],
  providers: [
    ConfirmDeleteService
  ],
  entryComponents: [
    EditColumnsComponent,
    NewItemComponent,
    EditItemComponent,
  ]
})
export class ItemsModule { }
