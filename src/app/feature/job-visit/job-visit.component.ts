import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-job-visit',
  templateUrl: './job-visit.component.html',
  styleUrls: ['./job-visit.component.scss'],
})
export class JobVisitComponent implements OnInit {
  toppings: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }

  ngOnInit(): void {
  }

}
