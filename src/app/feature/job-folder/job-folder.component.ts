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
  displayedColumns = ['packet', 'agreement', 'createdby', 'action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  packet: string;
  agreement: string;
  createdby:string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { packet: 'Packet One', agreement: 'Agreement One, Agreement Two ', createdby:'Steve Smith', action: '' },
  { packet: 'Packet Two', agreement: 'Agreement Two, Agreement Three', createdby:'Joseph William',action: '' },
  { packet: 'Packet Three',  agreement: 'Agreement Five', createdby:'Robert Henry',action: '' },
  { packet: 'Packet Four ', agreement: 'Agreement Three', createdby:'Steve Smith',action: '' },
  { packet: 'Packet Five', agreement: 'Agreement Two', createdby:'Joseph William',action: '' },
  { packet: 'Packet Six',  agreement: 'Agreement Five, Agreement Nine', createdby:'Robert Henry',action: '' },
  { packet: 'Packet Seven', agreement: 'Agreement Three, Agreement Eleven', createdby:'Joseph William',action: '' },
  { packet: 'Packet Eight', agreement: 'Agreement Two, Agreement Eight', createdby:'Robert Henry',action: '' },
  { packet: 'Packet Nine',  agreement: 'Agreement Six, Agreement Twelve', createdby:'Joseph William',action: '' },
  { packet: 'Packet Ten', agreement: 'Agreement Two, Agreement Five', createdby:'Robert Henry',action: '' },
  { packet: 'Packet Eleven',  agreement: 'Agreement Seven', createdby:'Steve Smith',action: '' },
  { packet: 'Packet Twelve', agreement: 'Agreement Ten', createdby:'Robert Henry',action: '' },

];