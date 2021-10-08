import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleDataWithCustomSchema } from './events-utc';


@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.scss']
})
export class TechnicianListComponent implements OnInit {

  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;
  technician = new FormControl();
  technicianList: string[] = ['On Leave', 'On Work', 'Other'];
  constructor() { }

  public selectedDate: Date = displayDate;
  public events: any[] = sampleDataWithCustomSchema;
  public eventFields: SchedulerModelFields = {
      id: 'TaskID',
      title: 'Title',
      description: 'Description',
      startTimezone: 'StartTimezone',
      start: 'Start',
      end: 'End',
      endTimezone: 'EndTimezone',
      isAllDay: 'IsAllDay',
      recurrenceRule: 'RecurrenceRule',
      recurrenceId: 'RecurrenceID',
  };


  datePic!: any;

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
