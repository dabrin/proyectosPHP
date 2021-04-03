import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AddUserPage } from '../add-user/add-user.page';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';
import { ShowUserPage } from '../show-user/show-user.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users: Observable<User[]>;
  textSearch = '';
  userName = localStorage.getItem("user");
  permiso =  localStorage.getItem("permisoAdm");
  constructor(private alert: AlertController, private modalCtrl: ModalController, private router: Router, private userService: UsersService) {
    if (this.userName == null||this.permiso=='0') { 
      this.router.navigate(['login']);
    }
   }
  ngOnInit() {
    //location.reload();
    this.loadCustomer();
  }
  

 async addCustomer() {
    const modal=await this.modalCtrl.create({
      component: AddUserPage,
      componentProps: {
      }
    });
    await modal.present();
    //this.router.navigate(['add-customer'], {})
    
    
  }
  loadCustomer() { 
    this.userService.getAllUsers().subscribe((data: any) => {
      //console.log(data)
      this.users = data; 
    });
    //location.reload();
    
  }
  async showUser(user:User) { 
    const modal=await this.modalCtrl.create({
      component: ShowUserPage,
      componentProps: {
        'id_number': user.ID_NUMBER,
        'name_user': user.NAME_USER,
        'user_name': user.USER_NAME,
        'e_mail': user.E_MAIL,
        'user_password': user.USER_PASSWORD,
      }
    });
    await modal.present();


    //this.router.navigate(['show-user', { 'id': id }]);
  }
  async deleteUser(id: string) { 
    
     const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Deseas <strong>eliminar</strong> este cliente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: async () => {
            this.userService.deleteUser(id).subscribe(data => {
            console.log("success")});
            await this.sleep(300);
            this.ngOnInit();
          }
        }
      ]
    });

    await alert.present();

  }

  search(event) { 
    this.textSearch = event.detail.value;
  }
  sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms));
  }

  doRefresh(event) {
    setTimeout(() => {
      this.userService.getAllUsers().subscribe((data: any) => {
      //console.log(data)
      this.users = data; 
    });
      event.target.complete();
    }, 1500);
  }

}
