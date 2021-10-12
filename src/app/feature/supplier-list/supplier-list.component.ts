import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupplierModalComponent } from './supplier-modal/supplier-modal.component';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  displayedColumns = ['name', 'phone', 'address', 'companyname', 'category', 'subcategory', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(SupplierModalComponent,{maxWidth: '900px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


export interface PeriodicElement {
  name: string;
  phone: string;
  address: string;
  companyname: string;
  category: string;
  subcategory: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Steve Smith', phone: '(555)-556-5556', address: '132, My Street, Kingston, New York 12401', companyname: 'Patrick Industries Inc.', category: 'Carpentry', subcategory: 'Laminate Floor Repair', action: '' },
  { name: 'Wade', phone: '(355)-556-3522', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', companyname: 'Thor Industries Inc.', category: 'Electrical', subcategory: 'Recess Light Installations', action: '' },
  { name: 'Dave', phone: '(353)-245-5432', address: '223 Center Street, Venus, New York 10001.', companyname: "'Pilgrim's Pride Corp'", category: 'Electrical', subcategory: 'Light Fixture Installations', action: '' },
  { name: 'Riley', phone: '(353)-355-3552', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', companyname: 'Thor Industries Inc..', category: 'Hauling', subcategory: 'Store & Office Hauling', action: '' },
  { name: 'Gilbert', phone: '(553)-874-2568', address: '132, My Street, Kingston, New York 12401', companyname: 'Patrick Industries Inc.', category: 'Plumbing', subcategory: 'Sink Installations', action: '' },
  { name: 'Brian', phone: '(886)-543-5784', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', companyname: 'Patrick Industries Inc.', category: 'Carpentry', subcategory: 'Laminate Floor Repair', action: '' },
  { name: 'Liam', phone: '(135)-674-5783', address: '223 Center Street, Venus, New York 10001.', companyname: 'Thor Industries Inc.', category: 'Hauling', subcategory: 'Yard Waste Removal', action: '' },
  { name: 'Nathaniel', phone: '(678)-542-6896', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', companyname:  "'Pilgrim's Pride Corp'", category: 'Carpentry', subcategory: 'Laminate Floor Repair', action: '' },
  { name: 'Ethan', phone: '(567)-667-9535', address: '223 Center Street, Venus, New York 10001.', companyname: '	Align Technology Inc.', category: 'Plumbing', subcategory: 'Kitchen & Bath Faucet Repairs', action: '' },
  { name: 'Lewis', phone: '(632)-457-3467', address: '132, My Street, Kingston, New York 12401', companyname: 'Patrick Industries Inc.', category: 'Hauling', subcategory: 'Packing & Moving Help', action: '' },
];