import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/user/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user=localStorage.getItem("user")
  constructor(private log:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("persona");
    this.route.navigate(['login']);
    //this.user = "";

  }
  isLog() {
    if (this.user != null) {
      return true;
    } else
      return false;
  }

}
