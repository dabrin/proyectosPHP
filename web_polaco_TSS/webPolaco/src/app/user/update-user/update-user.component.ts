import { Component, OnInit,Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  ID_NUMBER = "";
  NAME_USER = "";
  USER_NAME = "";
  E_MAIL = "";
  PASSWORD = "";
  userObj: User = new User;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private user:UsersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
      this.user.getUser(this.data._id).subscribe((data => {
      this.NAME_USER = data[0].NAME_USER;
      this.ID_NUMBER = data[0].ID_NUMBER;
      this.USER_NAME = data[0].USER_NAME;
      this.E_MAIL = data[0].E_MAIL;
      this.PASSWORD = data[0].USER_PASSWORD;

    }));
  }

  submit() {
    this.userObj.ID_NUMBER= this.ID_NUMBER;
    this.userObj.NAME_USER= this.NAME_USER;
    this.userObj.USER_NAME= this.USER_NAME;
    this.userObj.E_MAIL= this.E_MAIL;
    this.userObj.USER_PASSWORD= this.PASSWORD;
    this.user.updateUser(this.userObj).subscribe((data: any) => {
      console.log(data);
       this.user.filter('Register click');
      this.clearForm();

    });

   }

    clearForm() {
      this.NAME_USER = "";
      this.ID_NUMBER = "";
      this.USER_NAME ="";
      this.E_MAIL = "";
      this.PASSWORD ="";
  }

}
