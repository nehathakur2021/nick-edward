import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { CategoryModalComponent } from './category-modal/category-modal.component';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Remodels',
    children: [
      {name: 'Commercial Remodels'},
      {name: 'Home Remodels'},
      {name: 'Bathroom Remodels'},
      {name: 'Kitchen Remodels'},
    ]
  },
  {
    name: 'Repairs',
    children: [
      {name: 'Retail & Facility Maintenance'},
      {name: 'Apartment Handyman Repair'},
      {name: 'Rental Property Repair'},
      {name: 'Handyman Repair'},
    ]
  },
  {
    name: 'Carpentry',
    children: [
      {name: 'Moulding & Trim Installs'},
      {name: 'Laminate Floor Repair'},
      {name: 'Fence Repairs & Gates'},
    ]
  },
  {
    name: 'Painting',
    children: [
      {name: 'Prep & Paint Services'},
      {name: 'Stucco Patches'},
      {name: 'Drywall Repairs'},
      {name: 'Wallpaper Removal'},
    ]
  },
  {
    name: 'Electrical',
    children: [
      {name: 'Ceiling Fan Installations'},
      {name: 'Recess Light Installations'},
      {name: 'Light Fixture Installations'},
      {name: 'Home Kitchen Hood Repairs'},
    ]
  },
  {
    name: 'Plumbing',
    children: [
      {name: 'Bath Tub Replacements & Doors'},
      {name: 'Sink Installations'},
      {name: 'Kitchen & Bath Faucet Repairs'},
      {name: 'Garbage Disposal Installations'},
    ]
  },
  {
    name: 'Hauling',
    children: [
      {name: 'Home Junk Haul Aways'},
      {name: 'Store & Office Hauling'},
      {name: 'Yard Waste Removal'},
      {name: 'Packing & Moving Help'},
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})




export class ManageCategoryComponent implements OnInit {
  constructor(public dialog: MatDialog) { 
    this.dataSource1.data = TREE_DATA;
  }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CategoryModalComponent,{maxWidth: '1000px',});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

/* -------- */
private _transformer = (node: FoodNode, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
  };
}

treeControl = new FlatTreeControl<ExampleFlatNode>(
  node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
  this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource1 = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
