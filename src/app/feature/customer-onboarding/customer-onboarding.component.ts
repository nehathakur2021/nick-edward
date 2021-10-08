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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleDataWithCustomSchema } from './events-utc';

@Component({
  selector: 'app-customer-onboarding',
  templateUrl: './customer-onboarding.component.html',
  styleUrls: ['./customer-onboarding.component.scss']
})
export class CustomerOnboardingComponent implements OnInit {
  displayedColumns = ['time', 'schedule',];
  dataSource = ELEMENT_DATA;


  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private customerService: CustomerService) {

  }

  public selectedDate: Date = displayDate;
  public events: any[] = sampleDataWithCustomSchema;
  public eventFields: SchedulerModelFields = {
      id: 'TaskID',
      title: 'Title',
      description: 'Description',
      startTimezone: 'StartTimezone',
      start: 'Start',
      end: 'End',
      endTimezone: 'EndTimezone',
      isAllDay: 'IsAllDay',
      recurrenceRule: 'RecurrenceRule',
      recurrenceId: 'RecurrenceID',
  };


  expandKeys = ['100'];
  eKeys:any = ['100'];
  value?: string;
  val1?: string;

  nodes = [
    {
      title: 'Remodels',
      key: '100',
      children: [
        {
          title: 'Commercial Remodels',
          key: '101',
          isLeaf: true
        },
        {
          title: 'Home Remodels',
          key: '102',
          isLeaf: true
        },
        {
          title: 'Bathroom Remodels',
          key: '103',
          isLeaf: true
        },
        {
          title: 'Kitchen Remodels',
          key: '104',
          isLeaf: true
        }
      ]
    },
    {
      title: 'Repairs',
      key: '100',
      children: [
        {
          title: 'Retail & Facility Maintenance',
          key: '105',
          isLeaf: true
        },
        {
          title: 'Apartment Handyman Repair',
          key: '106',
          isLeaf: true
        }
      ]
    }
  ];

  n1 = [
    {
      title: 'Insight, 650 Village Trace, (888) 494-6744',
      key: '100',
      children: [
        {
          title: 'H&M, 829 State St Santa Barbara, (888) 979-4467',
          key: '101',
          isLeaf: true
        },
        {
          title: 'H&M, 829 State St Santa Barbara, (888) 979-4468',
          key: '102',
          isLeaf: true
        },
        {
          title: 'H&M, 829 State St Santa Barbara, (888) 979-4469',
          key: '103',
          isLeaf: true
        }
      ]
    },
    {
      title: 'RSM, 461 From Rd Second Floor Paramus, (973) 786-6549',
      key: '100',
      children: [
        {
          title: 'Aveda, 651 Paseo Nuevo Santa Barabra, (888) 970-3567',
          key: '105',
          isLeaf: true
        },
        {
          title: 'Aveda, 651 Paseo Nuevo Santa Barabra, (888) 970-3567',
          key: '106',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string): void {
    console.log($event);
  }
  onChanges($event: string): void {
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

 
  myControl = new FormControl();
  options: string[] = ['Smith, Steve -1467854378 ', 'William, Marcus -6132457665', 'Doe, Jane -9107658990'];
  filteredOptions: Observable<string[]> | undefined;

  otpGroupName: Array<any> = [{
    "optGroup": "1"
  },
  {
    "optGroup": "2"
  },
  {
    "optGroup": "3"
  }]


  optgroupOptions: Array<any> = [
    {
      "optName": "1",
      "optValue1": " H&M, 829 State St Santa Barbara, (888) 979-4461",
      "optValue2": " H&M, 829 State St Santa Barbara, (888) 979-4462",
      "optValue3": " H&M, 829 State St Santa Barbara, (888) 979-4463",

    },
    {
      "optName": "2",
      "optValue1": " H&M, 829 State St Santa Barbara, (888) 979-4469",
      "optValue2": " H&M, 829 State St Santa Barbara, (888) 979-4469",
      "optValue3": " H&M, 829 State St Santa Barbara, (888) 979-4469",

    },
    {
      "optName": "3",
      "optValue1": " H&M, 829 State St Santa Barbara, (888) 979-4469",
      "optValue2": " H&M, 829 State St Santa Barbara, (888) 979-4469",
      "optValue3": " H&M, 829 State St Santa Barbara, (888) 979-4469",

    },
  ]

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

export interface PeriodicElement {
  time: string;
  schedule: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { time: '9:00 AM', schedule: '9:00 AM - 12:00 PM' },
  { time: '1:00 PM', schedule: '1:00 PM - 2:00 PM' },
  { time: '3:00 PM', schedule: '3:00 PM - 5:00 PM' },
  { time: '6:00 PM', schedule: '6:00 PM - 9:00 PM' },
];

