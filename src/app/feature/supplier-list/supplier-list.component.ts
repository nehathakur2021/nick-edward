import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupplierModalComponent } from './supplier-modal/supplier-modal.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HostBinding, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SupplierListComponent implements OnInit {

  /////showing outer layout

  // columnsToDisplay = ['action','Name', 'Phone', 'Category', 'Subcategory',];
  columnsToDisplay = ['button','Name', 'Phone', 'Category', 'Subcategory','action'  ];
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  // expandedElement!: PeriodicElement | null;
  dataSource: MatTableDataSource<Element>;
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();

  }
  expandedElement: any;

  ngOnInit(): void {
    this.dataSource.data = data;
  }



  openDialog() {
    const dialogRef = this.dialog.open(SupplierModalComponent, { maxWidth: '900px', });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

export interface Element {
  Name: string;
  Phone: string;
  Address: string;
  Company: string;
  Category: string;
  Subcategory: string;
}
// export interface Element {
//   Name: string;
//   Phone: string;
//   Address: string;
//   Company: string;
//   Category: string;
//   Subcategory: string;
//   Action: string;
// }
// const data: Element[] = [
//   { Name: 'Steve Smith', Phone: '(555)-556-5556', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Carpentry', Subcategory: 'Laminate Floor Repair', Action: '' },

//   { Name: 'Wade', Phone: '(355)-556-3522', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Thor Industries Inc.', Category: 'Electrical', Subcategory: 'Recess Light Installations', Action: '' },
//   { Name: 'Dave', Phone: '(353)-245-5432', Address: '223 Center Street, Venus, New York 10001.', Company: "Pilgrim's Pride Corp", Category: 'Electrical', Subcategory: 'Light Fixture Installations', Action: '' },
//   { Name: 'Riley', Phone: '(353)-355-3552', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Thor Industries Inc..', Category: 'Hauling', Subcategory: 'Store & Office Hauling', Action: '' },
//   { Name: 'Gilbert', Phone: '(553)-874-2568', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Plumbing', Subcategory: 'Sink Installations', Action: '' },
//   { Name: 'Brian', Phone: '(886)-543-5784', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Patrick Industries Inc.', Category: 'Carpentry', Subcategory: 'Laminate Floor Repair', Action: '' },
//   { Name: 'Liam', Phone: '(135)-674-5783', Address: '223 Center Street, Venus, New York 10001.', Company: 'Thor Industries Inc.', Category: 'Hauling', Subcategory: 'Yard Waste Removal', Action: '' },
//   { Name: 'Nathaniel', Phone: '(678)-542-6896', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: "Pilgrim's Pride Corp", Category: 'Carpentry', Subcategory: 'Laminate Floor Repair', Action: '' },
//   { Name: 'Ethan', Phone: '(567)-667-9535', Address: '223 Center Street, Venus, New York 10001.', Company: '	Align Technology Inc.', Category: 'Plumbing', Subcategory: 'Kitchen & Bath Faucet Repairs', Action: '' },
//   { Name: 'Lewis', Phone: '(632)-457-3467', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Hauling', Subcategory: 'Packing & Moving Help', Action: '' },
// ];


const data: Element[] = [
  { Name: 'Steve Smith', Phone: '(555)-556-5556', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Carpentry', Subcategory: 'Laminate Floor Repair',  },

  { Name: 'Wade', Phone: '(355)-556-3522', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Thor Industries Inc.', Category: 'Electrical', Subcategory: 'Recess Light Installations',  },
  { Name: 'Dave', Phone: '(353)-245-5432', Address: '223 Center Street, Venus, New York 10001.', Company: "Pilgrim's Pride Corp", Category: 'Electrical', Subcategory: 'Light Fixture Installations',  },
  { Name: 'Riley', Phone: '(353)-355-3552', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Thor Industries Inc..', Category: 'Hauling', Subcategory: 'Store & Office Hauling',  },
  { Name: 'Gilbert', Phone: '(553)-874-2568', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Plumbing', Subcategory: 'Sink Installations',  },
  { Name: 'Brian', Phone: '(886)-543-5784', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: 'Patrick Industries Inc.', Category: 'Carpentry', Subcategory: 'Laminate Floor Repair',  },
  { Name: 'Liam', Phone: '(135)-674-5783', Address: '223 Center Street, Venus, New York 10001.', Company: 'Thor Industries Inc.', Category: 'Hauling', Subcategory: 'Yard Waste Removal',  },
  { Name: 'Nathaniel', Phone: '(678)-542-6896', Address: '3425 Stone Street, Apt. 2A, Jacksonville, FL 39404', Company: "Pilgrim's Pride Corp", Category: 'Carpentry', Subcategory: 'Laminate Floor Repair',  },
  { Name: 'Ethan', Phone: '(567)-667-9535', Address: '223 Center Street, Venus, New York 10001.', Company: '	Align Technology Inc.', Category: 'Plumbing', Subcategory: 'Kitchen & Bath Faucet Repairs',  },
  { Name: 'Lewis', Phone: '(632)-457-3467', Address: '132, My Street, Kingston, New York 12401', Company: 'Patrick Industries Inc.', Category: 'Hauling', Subcategory: 'Packing & Moving Help',  },
];