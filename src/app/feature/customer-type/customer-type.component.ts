import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';\

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  city: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John', email: 'john@gmail.com', city: 'New York'},
  {position: 2, name: 'Marcus', email: 'john@gmail.com', city: 'Los Angeles'},
  {position: 3, name: 'Robert', email: 'john@gmail.com', city: 'Chicago'},
  {position: 4, name: 'James', email: 'john@gmail.com', city: 'San Diego'},
];

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})


export class CustomerTypeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'city'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
   
  }
  

}


