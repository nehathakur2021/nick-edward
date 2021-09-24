import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-agreement',
  templateUrl: './job-agreement.component.html',
  styleUrls: ['./job-agreement.component.scss']
})
export class JobAgreementComponent implements OnInit {
  displayedColumns = ['name', 'active','action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  active: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Agreement One', active: '', action: '' },
  { name: 'Agreement Two', active: '', action: '' },
  { name: 'Agreement Three',  active: '', action: '' },
  { name: 'Agreement Four ', active: '', action: '' },
  { name: 'Agreement Five', active: '', action: '' },
  { name: 'Agreement Six',  active: '', action: '' },
  { name: 'Agreement Seven', active: '', action: '' },
  { name: 'Agreement Eight', active: '', action: '' },
  { name: 'Agreement Nine',  active: '', action: '' },
  { name: 'Agreement Ten', active: '', action: '' },
  { name: 'Agreement Eleven',  active: '', action: '' },
  { name: 'Agreement Twelve', active: '', action: '' },

];
