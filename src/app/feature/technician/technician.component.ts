import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})

export class TechnicianComponent implements OnInit {
  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

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
  { time: '10:00 AM', schedule: '' },
  { time: '11:00 AM', schedule: '' },
  { time: '12:00 PM', schedule: '' },
  { time: '1:00 PM', schedule: '' },
  { time: '2:00 PM', schedule: '' },
  { time: '3:00 PM', schedule: '' },
  { time: '4:00 PM', schedule: '' },
  { time: '5:00 PM', schedule: '' },
  { time: '6:00 PM', schedule: '' },
  { time: '7:00 PM', schedule: '' },
];