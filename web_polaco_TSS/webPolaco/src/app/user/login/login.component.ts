import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "";
  pass = "";
  users: any[] = [];
  show = "0";
  constructor(private log: LoginService, private route:Router) { }

  ngOnInit(): void {
    this.show = "0";
    this.log.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.show = "1";
    });



  }

  submit() {
    //console.log(this.users[0]);
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].USER_NAME == this.userName && this.users[index].USER_PASSWORD == this.pass) {
        //this.log.start(this.userName, this.pass);
        localStorage.setItem("user", this.users[index].NAME_USER);
        localStorage.setItem( "persona",JSON.stringify(this.users[index]));
        this.route.navigate(['list-products']);
    }
    }


    //
  }


}
