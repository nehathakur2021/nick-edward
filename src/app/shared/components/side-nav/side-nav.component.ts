import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router) { }
  showAdminMenu: boolean = false;
  showUsersMenu: boolean = false;
  showTechnicianMenu: boolean = false;

  ngOnInit() {
    // this.router.events.subscribe(
    //   (event: any) => {
    //     if (event instanceof NavigationEnd) {
    //       if(this.router.url==="/users" || this.router.url==="/technician-list"){
    //         this.showUsersMenu=false;
    //         this.showAdminMenu=true;
    //       }
    //       else if(this.router.url==="/users" || this.router.url==="/technician-list"){
    //         this.showUsersMenu=true;
    //         this.showAdminMenu=false;
    //       }
    //       else {
    //         this.showUsersMenu=true;
    //         this.showAdminMenu=true;
    //       }
    //       console.log('this.router.url', this.router.url);
    //     }
    //   }
    // );

    this.route.queryParams
      .subscribe(params => {
        const entity = params.entity;
        if (entity === "admin") {
          this.showAdminMenu = true;
        }
        else if (entity === "users") {
          this.showUsersMenu = true;
        }
        else if (entity === "schedule") {
          this.showTechnicianMenu = true;
        }
      }
      );


  }
  handleClose(route: string) {
    this.renderer.removeClass(document.body, 'show');
    this.isMenuOpen = false;

    if (route === "onboard") {
      this.showUsersMenu = true;
      this.router.navigateByUrl("/customer-type");
    }
    else if (route === "users") {
      this.showAdminMenu = true;
      this.router.navigateByUrl("/users");

    }
    else if (route === "tech") {
      this.showUsersMenu = true;
      this.router.navigateByUrl("/technician");

    }
    else if (route === "list") {
      this.showAdminMenu = true
      this.router.navigateByUrl("/technician-list");

    }
    else if (route === "technician") {
      this.showTechnicianMenu = true
      this.router.navigateByUrl("/schedule");
    }
    else if (route === "job") {
      this.showTechnicianMenu = true
      this.router.navigateByUrl("/job-visit");
    }
    else if(route==="category"){
      this.showAdminMenu=true
      this.router.navigateByUrl("/manage-category");

    }
  }
  isMenuOpen: boolean = false
}
