import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { CustomerOnboardingComponent } from './customer-onboarding/customer-onboarding.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { UsersComponent } from './users/users.component';
import { TechnicianComponent } from './technician/technician.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
     },
     {
      path:'customer-type',
      component:CustomerTypeComponent
     },
     {
      path:'customer-onboarding',
      component:CustomerOnboardingComponent
     },
     {
      path:'users',
      component:UsersComponent
     },
     {
      path:'technician',
      component:TechnicianComponent
     },
     {
      path:'technician-list',
      component:TechnicianListComponent
     },
     {
      path:'appoinment-detail',
      component:AppointmentDetailComponent
     },
     {
      path:'jobs',
      component:JobsComponent
     }
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
