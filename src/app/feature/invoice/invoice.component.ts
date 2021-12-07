import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  displayedColumns = ['name', 'active', 'action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  name: string;
  active: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Estimation', active: '', action: '' },
  { name: 'Materials Estimation', active: '', action: '' },
];
