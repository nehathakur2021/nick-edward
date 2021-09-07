import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerType = 'Retail';
  constructor() { }
  setCustomerType(type: any){
    debugger;
    this.customerType = type;
  }
  getCustomerType(){
    debugger;
    return this.customerType;
  }
}
