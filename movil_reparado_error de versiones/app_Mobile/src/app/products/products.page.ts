import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ModalController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddProductPage } from '../add-product/add-product.page';
import { LogService } from '../services/log.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products;
  textSearch = '';
  userName = localStorage.getItem("user");
  constructor( private logServ:LogService,private product: ProductsService, private router: Router,private modalCtrl:ModalController, private alert:AlertController) {
     
    if (this.userName == null) { 
      this.router.navigate(['login']);
    }
   }
  ngOnInit() {
    this.loadProds();
  }

  loadProds() { 
    this.product.getAllProducts().subscribe((data: any) => {
      console.log(data)
      this.products= data; 
    });
  }
  showProduct(id:string) { 
    this.router.navigate(['show-product',{'id':id}])
  }

  async addProduct() { 
    const modal=await this.modalCtrl.create({
      component: AddProductPage,
      componentProps: {
        'prop1': 'DNB',
        'prop2': '1234',
      }
    });
    await modal.present();
    //this.router.navigate(['add-product'],{})
  }
  async deleteProduct(id: string) { 
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: '¿Deseas <strong>eliminar</strong> este producto?',
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
          handler: async() => {
            this.product.deleteProduct(id).subscribe(data => {
              console.log("success")
            });
            await this.sleep(200);
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
      this.product.getAllProducts().subscribe((data: any) => {
     
      this.products= data; 
      });
      event.target.complete();
    }, 1500);
  }

}
