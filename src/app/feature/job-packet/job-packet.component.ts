import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleDataWithCustomSchema } from './events-utc';
import { JobPacketModalComponent } from './job-packet-modal/job-packet-modal.component';

@Component({
  selector: 'app-job-packet',
  templateUrl: './job-packet.component.html',
  styleUrls: ['./job-packet.component.scss']
})
export class JobPacketComponent implements OnInit {
  Events = [];
  constructor(private matDialog: MatDialog) { }
  matDialogRef: MatDialogRef<JobPacketModalComponent> | undefined;
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
/*   openModal():void {
    console.log('open modal method');
    this.matDialogRef = this.matDialog.open(JobPacketModalComponent, {
      disableClose: false
    });
  } */
  openModal():void {
    console.log('open modal method');
/*     this.matDialogRef = this.matDialog.open(JobPacketModalComponent, {
      disableClose: false
    }); */
    const dialogRef = this.matDialog.open(JobPacketModalComponent, {
      width: '800px'
    });
  }

}
