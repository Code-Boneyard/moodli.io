import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/pages/task-list/task-list.component';
import { NewTaskComponent } from './components/modals/new-task/new-task.component';
import { EditTaskComponent } from './components/modals/edit-task/edit-task.component';


const routes: Routes = [
  {
    path: 'list',
    component: TaskListComponent,
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
