import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AddSalePage } from '../add-sale/add-sale.page';
import { ShowSalePage } from '../show-sale/show-sale.page';
import { SalesService } from '../services/sales.service';
import { Sale } from '../models/Sale';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  sales;
  textSearch='';
  userName = localStorage.getItem("user");

  constructor(private router:Router,private modalCtrl: ModalController, private salesService: SalesService,private alertCtrl:AlertController) {
    if (this.userName == null) { 
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
    this.loadSales();
  }

  loadSales() { 
    this.salesService.getAllSales().subscribe((data: any) => {
      console.log(data)
      this.sales= data; 
    });
  }
  search(event) {
    this.textSearch = event.detail.value;
  }

  async addSale() { 
  const modal=await this.modalCtrl.create({
      component: AddSalePage,
    componentProps: {
      'sales': this.sales
      }
    });
    await modal.present();
  }

  async printer(sale:Sale) {
    console.log(sale.ID_NUMBER);
    const modal=await this.modalCtrl.create({
      component: ShowSalePage,
      componentProps: {
        'id_customer': sale.ID_NUMBER,
        'balance': sale.BALANCE,
        'payment': sale.PAYMENT,
        'date': sale.DATE_SALE,
        'type': sale.TYPE_PAYMENT,
        'last_payment': sale.LAST_PAYMENT,
        'last_balance': sale.LAST_BALANCE,
        'init_amount': sale.FIRST_AMOUNT,
        'name_customer':sale.NAME_CUSTOMER

      }
    });
    await modal.present();
  }

  async deleteSale(id:string) {
     const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Deseas <strong>eliminar</strong> esta cuenta?',
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
          handler: () => {
            this.salesService.deleteSale(id).subscribe(data => {
            
              location.reload();
              console.log("success")});
          }
        }
      ]
    });

    await alert.present();
    
  }



  async payment(id_numner:string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Realizar abono',
      inputs: [
        {
          name: 'monto',
          type: 'number',
          placeholder: 'Monto por abonar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler:  data  => {
            this.salesService.payment(id_numner, data.monto).subscribe(data => {
              this.sleep(300);
              this.ngOnInit();

              console.log("success");
            });
          }
        }
      ]
    });
    await alert.present();
  }
  doRefresh(event) {
    setTimeout(() => {
      this.salesService.getAllSales().subscribe((data: any) => {
      this.sales= data; 
      });
      event.target.complete();
    }, 1500);
  }
  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms));
  }

  

}
