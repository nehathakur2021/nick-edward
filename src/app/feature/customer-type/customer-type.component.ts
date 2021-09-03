import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }
  // showHideTabs(element: any) {
  //   debugger;
  //   // const radioBtnValue=element.target.value;
  //   if (element === "1") {
  //     this.showRetail = true;
  //     this.showResideantial = false;
  //   }
  //   else {
  //     this.showRetail = false;
  //     this.showResideantial = true;
  //   }
  // }
}
