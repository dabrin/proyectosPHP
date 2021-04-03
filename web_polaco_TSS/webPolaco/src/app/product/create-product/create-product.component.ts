import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../Product';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
 ]);
  code: string = "";
  name: string = "";
  sale_price: string = "";
  cost_price: string = "";
  quantity: string = "";
  description: string = "";
  prod = new Product();
  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
  }

  submit() {

    this.prod.CODE_PRODUCT=this.code;
    this.prod.SALE_PRICE = parseFloat(this.sale_price);
    this.prod.NAME_PRODUCT= this.name
    this.prod.COST_PRICE = parseFloat(this.cost_price);
    this.prod.QUANTITY = parseInt(this.quantity);
    this.prod.DESCRIPTION = this.description;

    this.prodService.postProduct(this.prod).subscribe((data => {
      this.ngOnInit();
      this.prodService.filter('Register click');
      this.clearForm();
    }))

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
