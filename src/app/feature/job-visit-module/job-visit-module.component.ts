import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobModalComponent } from './job-modal/job-modal.component';

@Component({
  selector: 'app-job-visit-module',
  templateUrl: './job-visit-module.component.html',
  styleUrls: ['./job-visit-module.component.scss']
})
export class JobVisitModuleComponent implements OnInit {
  displayedColumns = ['name', 'active', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(JobModalComponent,{maxWidth: '1200px', width:'100%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


export interface PeriodicElement {
  name: string;
  active: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Basic Info', active: '', action: '' },
  { name: 'Multi-trip job', active: '', action: '' },
  { name: 'Signatures from customer', active: '', action: '' },
  { name: 'Materials', active: '', action: '' },
  { name: 'Collect payment', active: '', action: '' },
  { name: 'Report issue', active: '', action: '' },
 

];
