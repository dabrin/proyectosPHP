import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { PrintService } from '../services/print.service';
import { DatePipe } from '@angular/common';
import { Product } from '../models/Product';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.page.html',
  styleUrls: ['./show-product.page.scss'],
  providers: [DatePipe]
})
export class ShowProductPage implements OnInit {
  bluetoothList: any = [];
  selectedPrinter: any;
  product_: object;
  private prod = new Product();
  public name: string;
  public id_product: string;
  public code_product: string;
  public sale_price: string;
  public description: string;
  public cost_price: string;
  public quantity: string;
  public id;
  myDate = new Date();
  public fecha: string;
  constructor(private route: ActivatedRoute, private product: ProductsService, private print: PrintService, private datePipe: DatePipe) {
    this.fecha = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //console.log(id)
    this.getProduct(this.id);
  }
  getProduct(id) {
    this.product.getProduct(id).subscribe(product => {
      this.name = product[0].NAME_PRODUCT;
      this.id_product = product[0].ID_PRODUCT;
      this.code_product = product[0].CODE_PRODUCT;
      this.sale_price = product[0].SALE_PRICE;
      this.description = product[0].DESCRIPTION;
      this.quantity = product[0].QUANTITY;
      this.cost_price = product[0].COST_PRICE;
    });
  }
  saveProduct() { 
    this.prod.NAME_PRODUCT = (document.querySelector('#name') as HTMLTextAreaElement).value;
    this.prod.CODE_PRODUCT = this.code_product;//(document.querySelector('#code_product') as HTMLTextAreaElement).value;
    this.prod.COST_PRICE = parseFloat((document.querySelector('#cost_price') as HTMLTextAreaElement).value);
    this.prod.SALE_PRICE = parseFloat((document.querySelector('#sale_price') as HTMLTextAreaElement).value);
    this.prod.DESCRIPTION = (document.querySelector('#description') as HTMLTextAreaElement).value;
    this.prod.QUANTITY = parseInt((document.querySelector('#quantity') as HTMLTextAreaElement).value);
    

    this.product.updateProduct(this.prod).subscribe(data => {
      (document.querySelector('#name') as HTMLTextAreaElement).value = "";
      (document.querySelector('#cost_price') as HTMLTextAreaElement).value = "";
      (document.querySelector('#sale_price') as HTMLTextAreaElement).value = "";
      (document.querySelector('#description') as HTMLTextAreaElement).value = "";
      (document.querySelector('#quantity') as HTMLTextAreaElement).value = "";
      console.log("success");
      this.ngOnInit();
    });
  }
 

}
