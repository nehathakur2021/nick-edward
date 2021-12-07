import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingModalComponent } from './pricing-modal/pricing-modal.component';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  displayedColumns = ['technician', 'firsthour', 'additionalhour', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PricingModalComponent,{maxWidth: '600px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  technician: string;
  firsthour: string;
  additionalhour: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { technician: 'Technician 1',firsthour:'$99.00', additionalhour:'$69.00'  },
  { technician: 'Technician 2', firsthour:'$169.00', additionalhour:'$119.00'},
];
