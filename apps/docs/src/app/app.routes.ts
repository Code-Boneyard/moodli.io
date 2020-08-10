import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AccountComponent } from './pages/account/account.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'quick-start',
    component: QuickStartComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutes { }
