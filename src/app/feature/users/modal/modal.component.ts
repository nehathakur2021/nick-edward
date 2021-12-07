import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public color: ThemePalette = 'primary';
  public touchUi = false;
  public disabled = false;

 
  constructor() { }

  ngOnInit(): void {
  }

}
