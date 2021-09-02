import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-customer-onboarding',
  templateUrl: './customer-onboarding.component.html',
  styleUrls: ['./customer-onboarding.component.scss']
})
export class CustomerOnboardingComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  showRetail:boolean=false;
  showResideantial:boolean=false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
showHideTabs(element:any){
  debugger;
  // const radioBtnValue=element.target.value;
  if(element==="1") {
    this.showRetail=true;
    this.showResideantial=false;
  }
  else{
    this.showRetail=false;
    this.showResideantial=true;
  }
}
}
