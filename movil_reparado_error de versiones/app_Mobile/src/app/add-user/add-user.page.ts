import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  id_number;
  name_user;
  user_name;
  email;
  user_pass;

  user = new User();
  userObs : Observable< User>;
  
  response = "0";
  showSucc = "";

  constructor(private userService:UsersService,private router:Router,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  addUser() { 
    this.response = "0";
    this.showSucc = "";
    this.user.ID_NUMBER= this.id_number;
    this.user.NAME_USER= this.name_user;
    this.user.USER_NAME= this.user_name;
    this.user.E_MAIL= this.email;
    this.user.USER_PASSWORD= this.user_pass;
    this.userService.post(this.user).subscribe((data: any) => {
      console.log(data);
      if (data.length >0) { 
        this.response=data[0].USER_NAME;
      }
      this.responsed();
    });

     
  console.log(this.user.USER_NAME)
  }
  async responsed() {
    if (this.response == "0") {

      this.id_number = "";
      this.id_number = "";
      this.name_user = "";
      this.email = "";
      this.user_pass = "";

        this.showSucc = "1";
        await this.sleep(800);
        this.router.navigate(['login'])
    }
    
  }


  sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms));
  }

  closeModal() { 
    this.modalCtrl.dismiss();
  }
}
