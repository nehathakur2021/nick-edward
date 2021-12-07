import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  address: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {address: 'abc', name: 'Jane	Doe'},
  {address: 'sss', name: 'Steve	Smith'},
];
