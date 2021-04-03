import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';
import { ModalController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {


 
  prod = new Product();
  constructor(private alert:AlertController, private route: Router, private prodService:ProductsService,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async addProduct() { 
    
  

    this.prod.NAME_PRODUCT = (document.querySelector('#name') as HTMLTextAreaElement).value;
    this.prod.CODE_PRODUCT = (document.querySelector('#code') as HTMLTextAreaElement).value;
    this.prod.COST_PRICE = parseFloat((document.querySelector('#cost_price') as HTMLTextAreaElement).value);
    this.prod.SALE_PRICE = parseFloat((document.querySelector('#sale_price') as HTMLTextAreaElement).value);
    this.prod.DESCRIPTION = (document.querySelector('#description') as HTMLTextAreaElement).value;
    this.prod.QUANTITY = parseInt((document.querySelector('#quantity') as HTMLTextAreaElement).value);
    
    this.prodService.postProduct(this.prod).subscribe(data => {
      
      console.log("success");
      (document.querySelector('#name') as HTMLTextAreaElement).value = "";
      (document.querySelector('#code') as HTMLTextAreaElement).value = "";
      (document.querySelector('#cost_price') as HTMLTextAreaElement).value = "";
      (document.querySelector('#sale_price') as HTMLTextAreaElement).value = "";
      (document.querySelector('#description') as HTMLTextAreaElement).value = "";
      (document.querySelector('#quantity') as HTMLTextAreaElement).value = "";
      this.ngOnInit();
      this.modalCtrl.dismiss();
    });
  }

  dismissModal() { 
    this.modalCtrl.dismiss();

  }

}
