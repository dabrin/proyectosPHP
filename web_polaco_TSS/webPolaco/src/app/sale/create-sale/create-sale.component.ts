import { Component, OnInit } from '@angular/core';
import { CustomersService} from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/customer/services/customers.service'
import { ProductsService} from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/product/services/products.service'
import { SalesService} from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/sale/services/sales.service'
import { sale_customer } from '../sale_customer';
import { Product} from 'C:/Users/gmg55/Desktop/Proyectos/web_polaco_TSS/webPolaco/src/app/product/Product';
@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  products: any[] = [];
  customers: any[] = [];
  selectedsArray:Product[] = [];
  selected_customer = "";
  type_payment = "";
  sale_=new sale_customer();
  constructor( private customerService:CustomersService,private prodService:ProductsService,private saleService:SalesService) { }

  ngOnInit(): void {
    this.loadCustomers();
    this.loadProducts();
  }
  loadProducts() {
    this.prodService.getAllProducts().subscribe((data: any) => {
      console.log("Products:"+data);
      this.products = data;
    })
   }
  loadCustomers() {
    this.customerService.getAllCustomer().subscribe((data: any) => {
      console.log("Customers:"+data);
      this.customers = data;
    })
  }
  itemsSelected(array:any) {
    console.log(this.selectedsArray);
  }
  customerSelected(item:any) {
    console.log(this.selected_customer);
  }
  typePaymentSelected() {
    console.log(this.type_payment);
  }

  async addSale() {
     for (let index = 0; index < this.selectedsArray.length; index++) {
      this.sale_.ID_NUMBER = this.selected_customer;
      this.sale_.ID_PRODUCT = ""+this.selectedsArray[index].ID_PRODUCT;
      this.sale_.TYPE_PAYMENT = this.type_payment;
      this.sale_.QUANTITY = (this.selectedsArray[index].QUANTITY-1);
      this.saleService.postSale(this.sale_).subscribe(data => {
        this.customerService.filter('Register click');
        this.ngOnInit();
      });
      await this.sleep(100);
     }

  }

  sleep(ms:any) {
  return new Promise(
    resolve => setTimeout(resolve, ms));
  }

}
