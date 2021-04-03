import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UsersService} from '../services/users.service'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  ID_NUMBER = "";
  NAME_USER = "";
  USER_NAME = "";
  E_MAIL = "";
  PASSWORD = "";

  userObj: User = new User;


  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }

  submit() {
    this.userObj.ID_NUMBER= this.ID_NUMBER;
    this.userObj.NAME_USER= this.NAME_USER;
    this.userObj.USER_NAME= this.USER_NAME;
    this.userObj.E_MAIL= this.E_MAIL;
    this.userObj.USER_PASSWORD= this.PASSWORD;
    this.user.post(this.userObj).subscribe((data: any) => {
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
