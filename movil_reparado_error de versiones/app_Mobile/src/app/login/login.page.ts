import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName;
  password;
  value="1";
  constructor(private route:Router,private LogService:LogService) { }

  ngOnInit() {
  }
  iniciar() { 
    
    if (this.LogService.start(this.userName, this.password)) {
      this.userName = "";
      this.password = "";
      this.value = "0";
    } else { 
      this.value = "0";
    }

    this.userName="";
  this.password="";

  }

   
}
