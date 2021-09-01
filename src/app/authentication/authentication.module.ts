
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UiComponentModule } from '../ui-component/ui-component.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    UiComponentModule
  ]
})
export class AuthenticationModule { }
