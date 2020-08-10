import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './components/modals/upload-file/upload-file.component';
import { FilesComponent } from './files.component';


const routes: Routes = [
  {
    path: '',
    component: FilesComponent,
  },
  {
    path: 'upload',
    component: UploadFileComponent,
    data: {
      breadcrumb: 'Upload'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutes { }
