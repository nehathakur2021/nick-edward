import { Component, OnInit , Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor( private renderer: Renderer2) { }

  ngOnInit() {
  }
  handleClose() {
    this.renderer.removeClass(document.body, 'show');
    this.isMenuOpen = false;
  }
  isMenuOpen: boolean = false
}
