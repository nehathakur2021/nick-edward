import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }
  toggleMenu() {
    if (document.body.classList.contains('show')) {
      this.renderer.removeClass(document.body, 'show');
    } else {
      this.renderer.addClass(document.body, 'show');
    }
  }
}
