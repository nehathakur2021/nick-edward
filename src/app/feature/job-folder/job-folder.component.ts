import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalJobFolerComponent } from './modal-job-foler/modal-job-foler.component';
import { AssignTemplateComponent } from '../assign-template/assign-template.component';
import { AssignFolderComponent } from './assign-folder/assign-folder.component';


@Component({
  selector: 'app-job-folder',
  templateUrl: './job-folder.component.html',
  styleUrls: ['./job-folder.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*', display: 'table-row' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class JobFolderComponent implements OnInit {
  columnsToDisplay = ['button', 'folder', 'customername', 'dateofvisit', 'shortdescription', 'status', 'assigned', 'action'];
  dataSource: MatTableDataSource<Element>;
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalJobFolerComponent, { maxWidth: '800px',width:'100%' });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(AssignFolderComponent, { maxWidth: '800px',width:'100%' });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  agreement = new FormControl();
  agreementList: string[] = ['Agreement One', 'Agreement Two', 'Agreement Three', 'Agreement Four', 'Agreement Five', 'Agreement Six'];
  folder = new FormControl();
  folderList: string[] = ['Folder One', 'Folder Two', 'Folder Three', 'Folder Four', 'Folder Five', 'Folder Six'];

  expandedElement: any;

  ngOnInit(): void {
    this.dataSource.data = data;
  }

}

export interface Element {
  folder: string;
  customername: string;
  address: string;
  dateofvisit: string;
  shortdescription: string;
  status: string;
  assigned: string;
  createdby: string;
}

const data: Element[] = [
  { folder: 'Folder One', customername: 'Steve Smith', address: '132, My Street, Kingston, New York 12401', dateofvisit: 'October 10, 2021', shortdescription: 'Plumbing Work', status: 'Active', createdby: 'Steve Smith', assigned: 'Robert Henry' },
  { folder: 'Folder Two', customername: 'Joseph William', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', dateofvisit: 'October 05, 2021', shortdescription: 'Painter Work', status: 'Complete', createdby: 'Joseph William', assigned: 'Joseph William' },
  { folder: 'Folder Three', customername: 'Robert Henry', address: '223 Center Street, Venus, New York 10001.', dateofvisit: 'October 02, 2021', shortdescription: 'Contruction Work', status: 'Pending', createdby: 'Robert Henry', assigned: 'Robert Henry' },
  { folder: 'Folder Four ', customername: 'Steve Smith', address: '132, My Street, Kingston, New York 12401', dateofvisit: 'October 10, 2021', shortdescription: 'Plumbing Work', status: 'Active', createdby: 'Steve Smith', assigned: 'Joseph William' },
  { folder: 'Folder Five', customername: 'Joseph William', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', dateofvisit: 'October 05, 2021', shortdescription: 'Painter Work', status: 'Complete', createdby: 'Joseph William', assigned: 'Robert Henry' },
  { folder: 'Folder Six', customername: 'Robert Henry', address: '223 Center Street, Venus, New York 10001.', dateofvisit: 'October 02, 2021', shortdescription: 'Contruction Work', status: 'Pending', createdby: 'Robert Henry', assigned: 'Robert Henry' },
  { folder: 'Folder Seven', customername: 'Steve Smith', address: '132, My Street, Kingston, New York 12401', dateofvisit: 'October 10, 2021', shortdescription: 'Plumbing Work', status: 'Active', createdby: 'Joseph William', assigned: 'Joseph William' },
  { folder: 'Folder Eight', customername: 'Joseph William', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', dateofvisit: 'October 05, 2021', shortdescription: 'Painter Work', status: 'Complete', createdby: 'Robert Henry', assigned: 'Robert Henry' },
  { folder: 'Folder Nine', customername: 'Robert Henry', address: '223 Center Street, Venus, New York 10001.', dateofvisit: 'October 02, 2021', shortdescription: 'Contruction Work', status: 'Pending', createdby: 'Joseph William', assigned: 'Robert Henry' },
  { folder: 'Folder Ten', customername: 'Steve Smith', address: '132, My Street, Kingston, New York 12401', dateofvisit: 'October 10, 2021', shortdescription: 'Plumbing Work', status: 'Complete', createdby: 'Robert Henry', assigned: 'Robert Henry' },
  { folder: 'Folder Eleven', customername: 'Joseph William', address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', dateofvisit: 'October 05, 2021', shortdescription: 'Painter Work', status: 'Active', createdby: 'Steve Smith', assigned: 'Joseph William' },
  { folder: 'Folder Twelve', customername: 'Robert Henry', address: '223 Center Street, Venus, New York 10001.', dateofvisit: 'October 02, 2021', shortdescription: 'Contruction Work', status: 'Pending', createdby: 'Robert Henry', assigned: 'Robert Henry' },
];