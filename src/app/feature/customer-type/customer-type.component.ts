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
export interface PeriodicElement2 {
  position: number;
  city: string;
  retailNname: string;
  storeNname: string;
}
/* PeriodicElement */
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'John', email: 'john@gmail.com', city: 'New York' },
  { position: 2, name: 'Marcus', email: 'john@gmail.com', city: 'Los Angeles' },
  { position: 3, name: 'Robert', email: 'john@gmail.com', city: 'Chicago'},
  { position: 4, name: 'James', email: 'john@gmail.com', city: 'San Diego'},
  { position: 1, name: 'John', email: 'john@gmail.com', city: 'New York'},
  { position: 2, name: 'Marcus', email: 'john@gmail.com', city: 'Los Angeles'},
  { position: 3, name: 'Robert', email: 'john@gmail.com', city: 'Chicago'},
  { position: 4, name: 'James', email: 'john@gmail.com', city: 'San Diego'},
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  { position: 1, city: 'New York', retailNname: '	Walmart', storeNname: 'b' },
  { position: 2, city: 'Los Angeles', retailNname: 'Sonic', storeNname: 'b' },
  { position: 3, city: 'Chicago', retailNname: '	Amazon.com', storeNname: 'b' },
  { position: 4, city: 'San Diego', retailNname: 'Sonic', storeNname: 'b', },
  { position: 1, city: 'New York', retailNname: '	Walmart', storeNname: 'b' },
  { position: 2, city: 'Los Angeles', retailNname: '	Amazon.com', storeNname: 'b' },
  { position: 3, city: 'Chicago', retailNname: 'Sonic', storeNname: 'b' },
  { position: 4, city: 'San Diego', retailNname: 'Amazon.com', storeNname: 'b' },
];

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})


export class CustomerTypeComponent implements OnInit {
  searchText = '';
  displayedColumns: string[] = ['position', 'name', 'email', 'city'];
  displayedColumns2: string[] = ['position', 'retailNname', 'storeNname', 'city'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  customerType = new FormControl();
  setCustomerType = 'Retail';
  constructor(private customerService: CustomerService) { }
  checkCustomer = '';

  ngOnInit(): void {
    debugger;
    this.customerService.setCustomerType(this.setCustomerType);
  }

  selectedCustomerType(): void {
    debugger;
    console.log(this.customerType.value);
    if (this.customerType.value === true) {
      this.setCustomerType = 'Residential';
      this.customerService.setCustomerType(this.setCustomerType);
    }
    else {
      this.setCustomerType = 'Retail';
      this.customerService.setCustomerType(this.setCustomerType);
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


