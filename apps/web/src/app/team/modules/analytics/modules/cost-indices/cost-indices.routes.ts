import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostIndicesComponent } from './cost-indices.component';

const routes: Routes = [
  { path: '', component: CostIndicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostIndicesRoutes { }
