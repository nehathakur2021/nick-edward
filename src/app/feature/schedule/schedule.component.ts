import { Component, OnInit } from '@angular/core';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleDataWithCustomSchema } from './events-utc';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  Events = [];

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
  { time: '9:00 AM', schedule: '9:00 AM - 12:00 PM' },
  { time: '1:00 PM', schedule: '1:00 PM - 2:00 PM' },
  { time: '3:00 PM', schedule: '3:00 PM - 5:00 PM' },
  { time: '6:00 PM', schedule: '6:00 PM - 9:00 PM' },
];
