import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

/* tslint:disable */

let btn = document.createElement("SELECT");
document.body.appendChild(btn);

const baseData: any[] = [
   
    {
        "TaskID": 69,
        "OwnerID": 2,

       
        
        "Start": "2013-06-24T11:00:00.000Z",
        "End": "2013-06-24T15:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false,
        "Title": "Steve Smith",
        "StartTimezone": "4:00 PM - 8:00 PM",
        'OrderId': 4454,
        'TechnicianName': 'Steve Smith',
        'Type': 'Residentail',
        'CustomerName': 'John',
        'TotalTime': '4',
        'Helpers': ' Carol, Liam',
        'Address': '5844 2nd Ave Seattle, Washington, USA',
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores debitis obcaecati minus rerum repudiandae.",
    },

    {
        "TaskID": 70,
        "OwnerID": 5546,
        
        "Start": "2013-06-24T10:00:00.000Z",
        "End": "2013-06-24T13:30:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false,
        "Title": "Jane Doe",
        "StartTimezone": "3:30 PM - 7:00 PM",
        'OrderId': 1,
        'TechnicianName': 'Jane Doe',
        'Type': 'Retail',
        'CustomerName': 'Willam',
        'TotalTime': '2',
        'CustomerPhone': '(555) 555-1234.',
        'Helpers': 'Steve, Carol, Liam',
        'Address': '1108 23rd Ave Seattle, Washington, USA',
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores debitis obcaecati minus rerum repudiandae.",
    },
    {
        "TaskID": 70,
        "OwnerID": 5546,
        
        "Start": "2013-06-24T14:00:00.000Z",
        "End": "2013-06-24T17:30:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false,
        "Title": "Jane Doe",
        "StartTimezone": "7:30 PM - 11:00 PM",
        'OrderId': 585,
        'TechnicianName': 'Andrew Smith',
        'Type': 'Retail',
        'CustomerName': 'Jerry',
        'TotalTime': '3',
        'CustomerPhone': '(555) 555-1234.',
        'Helpers': 'Liam',
        'Address': '1108 23rd Ave Seattle, Washington, USA',
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores debitis obcaecati minus rerum repudiandae.",
    },


];


const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate: string): Date => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

const randomInt = (min: any, max: any): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const displayDate = new Date(currentYear, 5, 24);

export const sampleData = baseData.map(dataItem => (/* title: dataItem.Title, */
    <SchedulerEvent>{
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,
        roomId: dataItem.RoomID,
        ownerID: dataItem.OwnerID
    }
));

export const sampleDataWithResources = baseData.map(dataItem => (
    <SchedulerEvent>{
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,
        roomId: randomInt(1, 2),
        attendees: [randomInt(1, 3)],

        
    }
));

export const sampleDataWithCustomSchema = baseData.map(dataItem => (
    {
        ...dataItem,
        Start: parseAdjust(dataItem.Start),
        End: parseAdjust(dataItem.End)
    }
));
