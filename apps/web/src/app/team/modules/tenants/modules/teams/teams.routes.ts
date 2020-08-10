import { Routes, RouterModule } from '@angular/router';
import { ManageTeamsComponent } from './pages/manage-teams/manage-teams.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageTeamsComponent
  },

];

export const TeamsRoutes = RouterModule.forChild(routes);
