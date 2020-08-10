import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTenantsComponent } from './pages/manage-tenants/manage-tenants.component';
import { TenantSettingsComponent } from './pages/tenant-settings/tenant-settings.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageTenantsComponent
  },
  {
    path: 'settings',
    component: TenantSettingsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TenantsRoutes { }
