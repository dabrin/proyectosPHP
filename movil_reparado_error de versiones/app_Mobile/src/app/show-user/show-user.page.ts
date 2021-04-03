import { Component, OnInit,Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})
export class ShowUserPage implements OnInit {
  user;

  @Input() id_number: string;
  @Input() name_user: string;
  @Input() user_name: string;
  @Input() e_mail: string;
  @Input() user_password: string;

  constructor( private users:UsersService, private modal:ModalController) { }

  ngOnInit() {
  }
  saveUser() {
    this.user = new User();

    this.user.NAME_USER = this.name_user;
    this.user.ID_NUMBER = this.id_number;
    this.user.USER_NAME = this.user_name;
    this.user.E_MAIL = this.e_mail;
    this.user.USER_PASSWORD = this.user_password;

      
    this.users.updateUser(this.user).subscribe(data => {
      console.log("success!!!");
      this.dismiss();
    })
  }

  dismiss() { 
    this.modal.dismiss();
  }

}
