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
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { CategoryModalComponent } from './manage-category/category-modal/category-modal.component';
import { NotificationComponent } from './notification/notification.component';
import { JobVisitComponent } from './job-visit/job-visit.component';
import { JobVisitModuleComponent } from './job-visit-module/job-visit-module.component';
import { JobModalComponent } from './job-visit-module/job-modal/job-modal.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@NgModule({
  imports: [
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableFilterModule,
    NzTreeSelectModule
  ],
  exports:[
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    NzTreeSelectModule
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
    FilterPipePipe,
    ProfileComponent,
    ScheduleComponent,
    ManageCategoryComponent,
    CategoryModalComponent,
    NotificationComponent,
    JobVisitComponent,
    JobVisitModuleComponent,
    JobModalComponent

   ]


})
export class FeatureModule { }
