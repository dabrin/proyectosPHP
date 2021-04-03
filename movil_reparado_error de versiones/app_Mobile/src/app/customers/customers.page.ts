import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service'
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { AddCustomerPage} from '../add-customer/add-customer.page'
import { ModalController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  public customers: Observable<Customer[]>;
  textSearch = '';
  userName = localStorage.getItem("user");
  constructor(private alert: AlertController, private modalCtrl: ModalController, private router: Router, private customer: CustomersService) {
    if (this.userName == null) { 
      this.router.navigate(['login']);
    }
   }
  ngOnInit() {
    //location.reload();
    this.loadCustomer();
  }
  

 async addCustomer() {
    const modal=await this.modalCtrl.create({
      component: AddCustomerPage,
      componentProps: {
      }
    });
    await modal.present();
    //this.router.navigate(['add-customer'], {})
    
    
  }
  loadCustomer() { 
    this.customer.getAllCustomers().subscribe((data: any) => {
      //console.log(data)
      this.customers = data; 
    });
    //location.reload();
    
  }
  showCustomer(id:string) { 
    this.router.navigate(['show-customer', { 'id': id }]);
  }
  async deleteCustomer(id: string) { 
    
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
            this.customer.deleteCustomer(id).subscribe(data => {
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
      this.customer.getAllCustomers().subscribe((data: any) => {
      //console.log(data)
      this.customers = data; 
    });
      event.target.complete();
    }, 1500);
  }

}
