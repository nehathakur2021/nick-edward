import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {
  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
export interface PeriodicElement {
  time: string;
  schedule: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { time: '9:00 AM', schedule: '' },
  { time: '1:00 PM', schedule: '' },
  { time: '3:00 PM', schedule: '' },
  { time: '6:00 PM', schedule: '' },
];
