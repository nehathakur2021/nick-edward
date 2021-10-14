import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-job-visit-modal',
  templateUrl: './job-visit-modal.component.html',
  styleUrls: ['./job-visit-modal.component.scss']
})
export class JobVisitModalComponent implements OnInit {

  toppings: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }


  ngOnInit(): void {
  }

}
