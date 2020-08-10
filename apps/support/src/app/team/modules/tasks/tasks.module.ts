import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { TasksRoutes } from './tasks.routes';

import { TaskService } from './services/task.service';
import { NewTaskComponent } from './components/modals/new-task/new-task.component';
import { EditTaskComponent } from './components/modals/edit-task/edit-task.component';
import { TaskListComponent } from './components/pages/task-list/task-list.component';

@NgModule({
  declarations: [
    NewTaskComponent,
    EditTaskComponent,
    TaskListComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    TasksRoutes
  ],
  providers: [
    TaskService
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class TasksModule { }
