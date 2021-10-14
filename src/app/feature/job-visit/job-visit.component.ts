import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JobVisitModalComponent } from './job-visit-modal/job-visit-modal.component';


@Component({
  selector: 'app-job-visit',
  templateUrl: './job-visit.component.html',
  styleUrls: ['./job-visit.component.scss'],
})
export class JobVisitComponent implements OnInit {
  toppings: FormGroup;
  displayedColumns = ['name', 'action'];
  dataSource = ELEMENT_DATA;


  constructor(fb: FormBuilder,public dialog: MatDialog) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(JobVisitModalComponent,{maxWidth: '1000px', width:'100%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


export interface PeriodicElement {
  name: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Basic Info' },
  { name: 'Multi-trip job'},
  { name: 'Signatures from customer' },
  { name: 'Materials' },
  { name: 'Collect payment' },
  { name: 'Report issue' }

];


