
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobVisitModuleComponent } from './job-visit-module.component';


const routes: Routes = [
  {
    path: 'job-visit-module',
    component: JobVisitModuleComponent

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
