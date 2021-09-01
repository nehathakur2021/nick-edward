import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { UiComponentModule } from '../ui-component/ui-component.module';
import { CustomersComponent } from './customers/customers.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  imports: [
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule
  ],
  exports:[
    CommonModule,
    UiComponentModule,
    FeatureRoutingModule
  ],
  declarations:
   [FeatureComponent,
    DashboardComponent,
    CustomersComponent,
    JobsComponent

   ]


})
export class FeatureModule { }
