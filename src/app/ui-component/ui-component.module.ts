import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {UiComponentComponent } from './ui-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule

  ],
  declarations: [UiComponentComponent],
  exports: [
    CommonModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule

  ],
})
export class UiComponentModule { }
