import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';
import { SalesService } from '../services/sales.service';
import { sale_customer } from '../models/sale_customer';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.page.html',
  styleUrls: ['./add-sale.page.scss'],
})
export class AddSalePage implements OnInit {
  products;
  customers;
  sale_=new sale_customer();
  selectedsArray = [];
  result;
  private selectedCustomer;
  selectedID;
  private selectedType;
  textSearchCust= '';
  textSearchProd='';
  
  @Input() sales: any[];
  

  constructor(private alertCtrl: AlertController,private modalCtrl: ModalController, private prodService: ProductsService, private customerServ: CustomersService, private saleService:SalesService) { }

  ngOnInit() {
    this.loadProducts();
    this.loadCustomers();
    console.log(this.sales);
  }

   searchProduct(event) {
    this.textSearchProd = event.detail.value;
   }
   searchCustomer(event) {
    this.textSearchCust = event.detail.value;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  addToList(id:string) {
    console.log("--> "+id);
  }
  loadProducts() { 
    this.prodService.getAllProducts().subscribe((data: any) => {
      const res = data.filter(d => d.QUANTITY > 0);
      console.log(res)
      this.products= res; 
    });
  }
  loadCustomers() {
    this.customerServ.getAllCustomers().subscribe((data: any) => {
     
      //console.log(data)
      this.customers= data; 
    });
  }
  
  
  onItemSelection(item, index:number): void {
    this.result = this.selectedsArray;
    console.log('Em result: ', this.result);
  }
  
  
  onCustomerSelection(item) :void{ 
    this.selectedCustomer = item;
    this.selectedID=this.selectedCustomer.ID_NUMBER
    console.log(this.selectedCustomer);
  }

  onTypeSelected(item):void { 
    this.selectedType = item;
  }

  async completeSold() {
    const customer = (document.querySelector('#id_User') as HTMLTextAreaElement).value;
    console.log(customer);
    for (let index = 0; index < this.selectedsArray.length; index++) {
      this.sale_.ID_NUMBER = this.selectedCustomer.ID_NUMBER;
      this.sale_.ID_PRODUCT =this.selectedsArray[index].ID_PRODUCT;
      this.sale_.TYPE_PAYMENT = this.selectedType;
      this.sale_.QUANTITY = (this.selectedsArray[index].QUANTITY-1);
      this.saleService.postSale(this.sale_).subscribe(data => {
        console.log("SUCCESS--->" + this.sale_)
      }, err => { 
          console.log("!!!!!!!!!!!!");
      }
      );
      await this.sleep(100);
    }
    location.reload();
  }


  sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms));
  }



}
