import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'email', 'phone', 'roletype', 'active', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent,{maxWidth: '800px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface PeriodicElement {
  name: string;
  email: string;
  phone: string;
  roletype: string;
  active: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Steve Smith', email: 'smith@gmail.com', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },

];