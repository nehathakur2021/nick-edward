import { UiComponentModule } from './../ui-component/ui-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UiComponentModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    SideNavComponent,
    UiComponentModule
  ]
})
export class SharedModule { }
