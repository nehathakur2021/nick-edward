import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentComponent } from './ui-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
<<<<<<< Updated upstream
import { MatGridListModule } from '@angular/material/grid-list';
=======
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';


>>>>>>> Stashed changes

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
    FlexLayoutModule,
<<<<<<< Updated upstream
    MatGridListModule
=======
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule

>>>>>>> Stashed changes
  ],
  declarations: [],
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
    FlexLayoutModule,
<<<<<<< Updated upstream
    MatGridListModule
=======
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule

>>>>>>> Stashed changes
  ],
})
export class UiComponentModule { }
