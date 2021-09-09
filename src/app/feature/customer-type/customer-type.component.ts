import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';\

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  city: string;
}
/* PeriodicElement */
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John', email: 'john@gmail.com', city: 'New York'},
  {position: 2, name: 'Marcus', email: 'john@gmail.com', city: 'Los Angeles'},
  {position: 3, name: 'Robert', email: 'john@gmail.com', city: 'Chicago'},
  {position: 4, name: 'James', email: 'john@gmail.com', city: 'San Diego'},
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
  searchText = '';
  displayedColumns: string[] = ['position', 'name', 'email', 'city'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  customerType = new FormControl();
  setCustomerType = 'Retail';
  constructor(private customerService: CustomerService) { }
  checkCustomer = '';

  ngOnInit(): void {
   debugger;
   this.customerService.setCustomerType(this.setCustomerType);
  }
  
  selectedCustomerType(): void{
    debugger;
    console.log(this.customerType.value);
    if(this.customerType.value === true){
      this.setCustomerType = 'Residential';
      this.customerService.setCustomerType(this.setCustomerType);
    }
    else{
      this.setCustomerType = 'Retail';
      this.customerService.setCustomerType(this.setCustomerType);
    }
  }
}


