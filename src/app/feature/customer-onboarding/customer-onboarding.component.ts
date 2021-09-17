import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { CustomerService } from '../customer.service';
/* import { MatSelect } from '@angular/material/select';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'; */
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select'; 

@Component({
  selector: 'app-customer-onboarding',
  templateUrl: './customer-onboarding.component.html',
  styleUrls: ['./customer-onboarding.component.scss']
})
export class CustomerOnboardingComponent implements OnInit {

  expandKeys = ['100'];
  value?: string;
  
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          isLeaf: true
        },
        {
          title: 'parent 1-1',
          key: '1002',
          isLeaf: true
        }
      ]
    },
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '56567',
          isLeaf: true
        },
        {
          title: 'parent 1-1',
          key: '4556',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string): void {
    console.log($event);
  }


  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  showRetail: boolean = false;
  showResideantial: boolean = false;
  toppings = new FormControl();
  toppingList: string[] = ['John', 'Marcus', 'Robert', 'James', 'Charles'];
  technician = new FormControl();
  technicianList: string[] = ['John', 'Marcus', 'Robert', 'James', 'Charles'];
  customerType = new FormControl();
  setCustomerType = 'Retail';
  checkCustomer = '';

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private customerService: CustomerService) {

  }


  ngOnInit() {
    this.checkCustomer = this.customerService.getCustomerType();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // mock async
    setTimeout(() => {
      this.value = '1001';
    }, 1000);
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
  openDialog() {
    const dialogRef = this.dialog.open(CustomerModalComponent, { maxWidth: '800px', width: "100%" });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showHideTabs(element: any) {
    debugger;
    // const radioBtnValue=element.target.value;
    if (element === "1") {
      this.showRetail = true;
      this.showResideantial = false;
    }
    else {
      this.showRetail = false;
      this.showResideantial = true;
    }
  }

}
