import { Component, OnInit, ViewChild } from '@angular/core';
import { SchedulerEvent, SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { EventObject, FullCalendarOptions } from 'ngx-fullcalendar';
import { Dropdown } from './dropdown.type';
import { sampleData, displayDate, sampleDataWithResources, sampleDataWithCustomSchema } from './events-utc';


@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})

export class TechnicianComponent implements OnInit {

 
  Events = [];
  
  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;
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


  constructor() { }

  ngOnInit(): void {
 
  }
  close(){
    debugger
  }

  showDropdown($event:any):void {
    debugger;
  
    console.log('clicked....');
    $event.preventDefault();
    
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