import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
@Component({
  selector: 'app-customer-onboarding',
  templateUrl: './customer-onboarding.component.html',
  styleUrls: ['./customer-onboarding.component.scss']
})
export class CustomerOnboardingComponent implements OnInit {
 
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
<<<<<<< Updated upstream
  showRetail: boolean = false;
  showResideantial: boolean = false;
  toppings = new FormControl();
  toppingList: string[] = ['John', 'Marcus', 'Robert', 'James', 'Charles'];
  technician = new FormControl();
  technicianList: string[] = ['John', 'Marcus', 'Robert', 'James', 'Charles'];
  
  
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }
=======
  showRetail:boolean=false;
  showResideantial:boolean=false;
  isVertical = false;

  constructor(private _formBuilder: FormBuilder) {}
>>>>>>> Stashed changes


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });    
  }
  openDialog() {
    const dialogRef = this.dialog.open(CustomerModalComponent,{maxWidth:'800px',width:"100%"});

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
