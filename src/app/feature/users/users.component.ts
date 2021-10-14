import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'email','username','password', 'phone', 'roletype', 'active', 'action'];
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
  username: string;
  password: string;
  phone: string;
  roletype: string;
  active: string;
  action: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Steve Smith', email: 'smith@gmail.com',username:'steve',password:'hdjad222', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com',username:'joseph',password:'jdhw223', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com',username:'robert',password:'kdhs324', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com',username:'-',password:'-', phone: '(555)-556-5556', roletype: 'Helper', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com',username:'joseph323',password:'jdhd293', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com',username:'robert35',password:'fsgs324', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com',username:'steve543',password:'fggds324', phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com',username:'joseph383',password:'erwq321', phone: '(458)-585-5647', roletype: 'Technician', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com',username:'robert937',password:'ksgs732', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Joseph William', email: 'joseph@gmail.com', username:'-',password:'-',phone: '(458)-585-5647', roletype: 'Helper', active: '', action: '' },
  { name: 'Robert Henry', email: 'henry@gmail.com',username:'robert732',password:'shaku732', phone: '(558)-684-8574', roletype: 'Admin', active: '', action: '' },
  { name: 'Steve Smith', email: 'smith@gmail.com', username:'steve82762',password:'djdgsj3836',phone: '(555)-556-5556', roletype: 'Employee', active: '', action: '' },

];