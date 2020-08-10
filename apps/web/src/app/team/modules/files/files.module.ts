import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FilesRoutes } from './files.routes';
import { CoreModule } from '../../../core/core.module';

import { FileService } from './services/file.service';

import { RecentFilesComponent } from './components/widgets/recent-files/recent-files.component';
import { UploadFileComponent } from './components/modals/upload-file/upload-file.component';
import { DropzoneComponent } from './components/partials/dropzone/dropzone.component';
import { FavoriteFilesComponent } from './components/widgets/favorite-files/favorite-files.component';
import { FilesComponent } from './files.component';
import { EditPropertiesComponent } from './components/modals/edit-properties/edit-properties.component';
import { FileDetailsComponent } from './pages/file-details/file-details.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FilesRoutes,
  ],
  declarations: [
    UploadFileComponent,
    DropzoneComponent,
    RecentFilesComponent,
    FavoriteFilesComponent,
    FilesComponent,
    EditPropertiesComponent,
    FileDetailsComponent
  ],
  providers: [
    FileService
  ],
  entryComponents: [
    // Put Modals Here
  ]

})
export class FilesModule { }
