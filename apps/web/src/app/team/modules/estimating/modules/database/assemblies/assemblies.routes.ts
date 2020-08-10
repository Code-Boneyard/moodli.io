import { Routes, RouterModule } from '@angular/router';
import { ManageAssembliesComponent } from './pages/manage-assemblies/manage-assemblies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageAssembliesComponent,
  },
];

export const AssembliesRoutes = RouterModule.forChild(routes);
