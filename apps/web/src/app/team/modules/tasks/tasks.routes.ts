import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './components/modals/new-task/new-task.component';
import { EditTaskComponent } from './components/modals/edit-task/edit-task.component';
import { ManageTasksComponent } from './components/pages/manage-tasks/manage-tasks.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageTasksComponent,
    data: {
      breadcrumb: 'Manage'
    },
  },
  {
    path: 'new',
    component: NewTaskComponent,
    data: {
      breadcrumb: 'New Task'
    },
  },
  {
    path: 'edit',
    component: EditTaskComponent,
    data: {
      breadcrumb: 'Edit Task'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutes { }
