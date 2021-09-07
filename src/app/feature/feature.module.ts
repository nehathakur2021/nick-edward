import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentModule } from '../ui-component/ui-component.module';
import { CustomersComponent } from './customers/customers.component';
import { JobsComponent } from './jobs/jobs.component';
import { CustomerOnboardingComponent } from './customer-onboarding/customer-onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { CustomerModalComponent } from './customer-onboarding/customer-modal/customer-modal.component';
import { UsersComponent } from './users/users.component';
import { ModalComponent } from './users/modal/modal.component';
import { TechnicianComponent } from './technician/technician.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { MatTableFilterModule } from 'mat-table-filter';
import { FilterPipePipe } from './filter-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableFilterModule
  ],
  exports:[
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule
  ],
  declarations:
   [
    DashboardComponent,
    CustomersComponent,
    JobsComponent,
    CustomerOnboardingComponent,
    CustomerTypeComponent,
    CustomerModalComponent,
    UsersComponent,
    ModalComponent,
    TechnicianComponent,
    TechnicianListComponent,
    AppointmentDetailComponent,
    FilterPipePipe

   ]


})
export class FeatureModule { }
