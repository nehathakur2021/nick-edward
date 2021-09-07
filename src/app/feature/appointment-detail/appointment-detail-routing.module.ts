import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './appointment-detail.component';

const routes: Routes = [
  {
    path: 'appoinment-detail',
    component: AppointmentDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOnboardingRoutingModule { }
