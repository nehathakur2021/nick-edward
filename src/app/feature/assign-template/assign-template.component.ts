import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateModalComponent } from './template-modal/template-modal.component';


@Component({
  selector: 'app-assign-template',
  templateUrl: './assign-template.component.html',
  styleUrls: ['./assign-template.component.scss']
})
export class AssignTemplateComponent implements OnInit {
  displayedColumns = ['name', 'technician', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TemplateModalComponent,{maxWidth: '600px', width:'100%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


export interface PeriodicElement {
  name: string;
  technician: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Basic Info', technician: 'Steve Smith' },
  { name: 'Multi-trip job', technician: 'Joseph William' },
  { name: 'Signatures from customer', technician: 'Robert Henry' },
  { name: 'Materials', technician: 'Nathaniel Ethan' },
  { name: 'Collect payment', technician: 'Gilbert Riley' },
  { name: 'Report issue', technician: 'Dave Brian' }

];

