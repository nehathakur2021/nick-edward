import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentModule } from '../ui-component/ui-component.module';
import { CustomersComponent } from './customers/customers.component';
import { JobsComponent } from './jobs/jobs.component';
import { CustomerOnboardingComponent } from './customer-onboarding/customer-onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule
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
    CustomerOnboardingComponent

   ]


})
export class FeatureModule { }
