import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  redirectToHome(route:string){
    if(route==="admin"){
      this.route.navigateByUrl("/users?entity=admin");
    }

    else if(route==="users") {
      this.route.navigateByUrl("/customer-onboarding?entity=users");
    }

    else {
      this.route.navigateByUrl("/schedule?entity=schedule");
    }
  }
}
