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
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { JobAgreementComponent } from './job-agreement/job-agreement.component';
import { JobPacketComponent } from './job-packet/job-packet.component';
import { JobFolderComponent } from './job-folder/job-folder.component';
import { JobPacketModalComponent } from './job-packet/job-packet-modal/job-packet-modal.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierModalComponent } from './supplier-list/supplier-modal/supplier-modal.component';
import { JobFolderTechnicianComponent } from './job-folder-technician/job-folder-technician.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AssignTemplateComponent } from './assign-template/assign-template.component';
import { TemplateModalComponent } from './assign-template/template-modal/template-modal.component';
import { JobVisitModalComponent } from './job-visit/job-visit-modal/job-visit-modal.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ZipcodeManagementComponent } from './zipcode-management/zipcode-management.component';
import { ZipcodeModalComponent } from './zipcode-management/zipcode-modal/zipcode-modal.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingModalComponent } from './pricing/pricing-modal/pricing-modal.component';
import { EstimateComponent } from './estimate/estimate.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ModalJobFolerComponent } from './job-folder/modal-job-foler/modal-job-foler.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AssignFolderComponent } from './job-folder/assign-folder/assign-folder.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableFilterModule,
    NzTreeSelectModule,
    SchedulerModule,
    NgxFullCalendarModule,
    // BrowserAnimationsModule,
    NgxMatColorPickerModule,

    MatCardModule,
 
    MatFormFieldModule,
  

  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
   ],

  exports:[
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    NzTreeSelectModule,
    SchedulerModule,
    NgxFullCalendarModule
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
    JobModalComponent,
    DropdownSelectComponent,
    JobAgreementComponent,
    JobPacketComponent,
    JobFolderComponent,
    JobPacketModalComponent,
    SupplierListComponent,
    SupplierModalComponent,
    JobFolderTechnicianComponent,
    AssignTemplateComponent,
    TemplateModalComponent,
    JobVisitModalComponent,
    ZipcodeManagementComponent,
    ZipcodeModalComponent,
    PricingComponent,
    PricingModalComponent,
    EstimateComponent,
    InvoiceComponent,
    ModalJobFolerComponent,
    AdminDashboardComponent,
    AssignFolderComponent

   ]


})
export class FeatureModule { }
