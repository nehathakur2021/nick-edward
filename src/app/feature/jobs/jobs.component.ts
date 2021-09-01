import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Id:number;
  CustomerName: string;
  CustomerDevice: string;
  Address: string;
  Status: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id:1, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'Proposal', Action:'edit'},
  {Id:2, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:3, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:4, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:5, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:6, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:7, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:8, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:9, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
  {Id:10, CustomerName: 'Jack Harris', CustomerDevice: 'Mitsubishi Electric', Address: 'Street 12, AB Colony', Status:'completed', Action:'edit'},
];



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'CustomerName', 'CustomerDevice', 'Address', 'Status', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
