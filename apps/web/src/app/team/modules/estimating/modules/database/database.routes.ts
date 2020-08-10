import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDatabaseComponent } from './pages/manage-database/manage-database.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageDatabaseComponent,
    data: {
      breadcrumb: 'Manage'
    }
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
    data: {
      breadcrumb: 'Database'
    },
    canActivate: []
  },
  {
    path: 'assemblies',
    loadChildren: () => import('./assemblies/assemblies.module').then(m => m.AssembliesModule),
    data: {
      breadcrumb: 'Database'
    },
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DatabaseRoutes { }
