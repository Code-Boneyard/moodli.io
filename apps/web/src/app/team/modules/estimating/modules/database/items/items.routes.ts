import { Routes, RouterModule } from '@angular/router';
import { ManageItemsComponent } from './pages/manage-items/manage-items.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageItemsComponent
  },

];

export const ItemsRoutes = RouterModule.forChild(routes);
