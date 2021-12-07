import { Component, OnInit } from '@angular/core';
import { ZipcodeModalComponent } from './zipcode-modal/zipcode-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-zipcode-management',
  templateUrl: './zipcode-management.component.html',
  styleUrls: ['./zipcode-management.component.scss']
})
export class ZipcodeManagementComponent implements OnInit {
  displayedColumns = ['zone', 'zipcode', 'city','state','status', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ZipcodeModalComponent,{maxWidth: '600px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  zone: string;
  zipcode: string;
  city: string;
  state: string;
  status: string;

  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { zone: 'Zone 3', zipcode: '99501', city: 'Houston',state:'Alaska',status:'Available' },
  { zone: 'Zone 1', zipcode: '85001', city: 'Chicago',state:'Arizona',status:'Available' },
  { zone: 'Zone 3', zipcode: '72201', city: 'Los Angeles',state:'Florida',status:'Not Available ' },
  { zone: 'Zone 2', zipcode: '94203', city: 'New York City',state:'Michigan',status:'Available Soon' },

];
