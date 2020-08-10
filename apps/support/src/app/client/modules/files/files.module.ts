import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FilesRoutes } from './files.routes';

import { FileService } from './services/file.service';

import { RecentFilesComponent } from './components/widgets/recent-files/recent-files.component';
import { UploadFileComponent } from './components/modals/upload-file/upload-file.component';
import { DropzoneComponent } from './components/partials/dropzone/dropzone.component';
import { FavoriteFilesComponent } from './components/widgets/favorite-files/favorite-files.component';
import { FilesComponent } from './files.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FilesRoutes,

  ],
  declarations: [
    UploadFileComponent,
    DropzoneComponent,
    RecentFilesComponent,
    FavoriteFilesComponent,
    FilesComponent
  ],
  providers: [
    FileService
  ]

})
export class FilesModule { }
