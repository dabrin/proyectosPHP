import { Component, OnInit ,Inject} from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../services/products.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  private prod = new Product();
  code: string = "";
  name: string = "";
  sale_price: string = "";
  cost_price: string = "";
  quantity: string = "";
  description: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private prodService: ProductsService) {

  }

  ngOnInit(): void {
    console.log()
    this.loadData();
    //this.loadForm();
  }

  async loadData() {
    this.prodService.getOneProduct(this.data._id).subscribe( data => {
      this.prod.CODE_PRODUCT = data[0].CODE_PRODUCT;
      this.prod.NAME_PRODUCT = data[0].NAME_PRODUCT;
      this.prod.SALE_PRICE = data[0].SALE_PRICE;
      this.prod.QUANTITY = data[0].QUANTITY;
      this.prod.COST_PRICE = data[0].COST_PRICE;
      this.prod.DESCRIPTION =  data[0].DESCRIPTION;
      //console.log(this.prod.QUANTITY);
      this.loadForm();
    });


  }
  loadForm() {
    this.code = this.prod.CODE_PRODUCT;
    this.name = this.prod.NAME_PRODUCT;
    this.cost_price = ""+this.prod.COST_PRICE;
    this.sale_price = ""+this.prod.SALE_PRICE;
    this.description = this.prod.DESCRIPTION;
    this.quantity = "" + this.prod.QUANTITY;
    //console.log("!!!!"+this.code)
  }

  submit() {
    this.prod.CODE_PRODUCT=this.code;
    this.prod.SALE_PRICE = parseFloat(this.sale_price);
    this.prod.NAME_PRODUCT= this.name
    this.prod.COST_PRICE = parseFloat(this.cost_price);
    this.prod.QUANTITY = parseInt(this.quantity);
    this.prod.DESCRIPTION = this.description;
    this.prodService.updateProduct(this.prod).subscribe(data => {
       this.prodService.filter('Register click');
      this.clearForm();
    })
  }
  clearForm() {
    this.code = "";
    this.name = "";
    this.cost_price = "";
    this.sale_price = "";
    this.description = "";
    this.quantity = "";
  }
}
