import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerTypeComponent} from '../app/feature/customer-type/customer-type.component';
import {UsersComponent} from '../app/feature/users/users.component';


import {LayoutComponent} from '../app/shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },

  {
    path:"dashboard", component:LayoutComponent
  },
  {
    path:"employess", component:CustomerTypeComponent
  },
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
