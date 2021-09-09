
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCategoryComponent } from './manage-category.component';


const routes: Routes = [
  {
    path: 'manage-category',
    component: ManageCategoryComponent

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
