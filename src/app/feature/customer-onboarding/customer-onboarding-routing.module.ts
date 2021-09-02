import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOnboardingComponent } from './customer-onboarding.component';

const routes: Routes = [
  {
    path: 'customer-onboarding',
    component: CustomerOnboardingComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOnboardingRoutingModule { }
