import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
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
  { name: 'Estimate Basic Info', active: '', action: '' },
  { name: 'Materials Estimate', active: '', action: '' },
  { name: 'Estimate payment', active: '', action: '' },
];