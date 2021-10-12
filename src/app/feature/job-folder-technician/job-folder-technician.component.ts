import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-job-folder-technician',
  templateUrl: './job-folder-technician.component.html',
  styleUrls: ['./job-folder-technician.component.scss']
})
export class JobFolderTechnicianComponent implements OnInit {
  agreement = new FormControl();
  agreementList: string[] = ['Agreement One', 'Agreement Two', 'Agreement Three', 'Agreement Four', 'Agreement Five', 'Agreement Six'];
  folder = new FormControl();
  folderList: string[] = ['Folder One', 'Folder Two', 'Folder Three', 'Folder Four', 'Folder Five', 'Folder Six'];
  displayedColumns = ['folder', 'agreement', 'createdby', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  folder: string;
  agreement: string;
  createdby:string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { folder: 'Folder One', agreement: 'Agreement One, Agreement Two ', createdby:'Steve Smith', action: '' },
  { folder: 'Folder Two', agreement: 'Agreement Two, Agreement Three', createdby:'Joseph William',action: '' },
  { folder: 'Folder Three',  agreement: 'Agreement Five', createdby:'Robert Henry',action: '' },
  { folder: 'Folder Four ', agreement: 'Agreement Three', createdby:'Steve Smith',action: '' },
];
