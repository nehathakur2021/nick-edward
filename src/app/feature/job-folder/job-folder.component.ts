import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-job-folder',
  templateUrl: './job-folder.component.html',
  styleUrls: ['./job-folder.component.scss']
})
export class JobFolderComponent implements OnInit {
  agreement = new FormControl();
  agreementList: string[] = ['Agreement One', 'Agreement Two', 'Agreement Three', 'Agreement Four', 'Agreement Five', 'Agreement Six'];
  packet = new FormControl();
  packetList: string[] = ['Packet One', 'Packet Two', 'Packet Three', 'Packet Four', 'Packet Five', 'Packet Six'];
  displayedColumns = ['packet', 'agreement','action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  packet: string;
  agreement: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { packet: 'Packet One', agreement: 'Agreement One, Agreement Two ', action: '' },
  { packet: 'Packet Two', agreement: 'Agreement Two, Agreement Three', action: '' },
  { packet: 'Packet Three',  agreement: 'Agreement Five', action: '' },
  { packet: 'Packet Four ', agreement: 'Agreement Three', action: '' },
  { packet: 'Packet Five', agreement: 'Agreement Two', action: '' },
  { packet: 'Packet Six',  agreement: 'Agreement Five, Agreement Nine', action: '' },
  { packet: 'Packet Seven', agreement: 'Agreement Three, Agreement Eleven', action: '' },
  { packet: 'Packet Eight', agreement: 'Agreement Two, Agreement Eight', action: '' },
  { packet: 'Packet Nine',  agreement: 'Agreement Six, Agreement Twelve', action: '' },
  { packet: 'Packet Ten', agreement: 'Agreement Two, Agreement Five', action: '' },
  { packet: 'Packet Eleven',  agreement: 'Agreement Seven', action: '' },
  { packet: 'Packet Twelve', agreement: 'Agreement Ten', action: '' },

];