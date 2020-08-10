import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsListComponent } from './tables/classifications-list/classifications-list.component';
import { ManageClassificationsComponent } from './pages/manage-classifications/manage-classifications.component';
import { ClassificationDetailComponent } from './pages/classification-detail/classification-detail.component';
import { AddClassificationComponent } from './modals/add-classification/add-classification.component';
import { EditClassificationComponent } from './modals/edit-classification/edit-classification.component';



@NgModule({
  declarations: [ ClassificationsListComponent, ManageClassificationsComponent, ClassificationDetailComponent, AddClassificationComponent, EditClassificationComponent],
  imports: [
    CommonModule
  ]
})
export class ClassificationsModule { }
