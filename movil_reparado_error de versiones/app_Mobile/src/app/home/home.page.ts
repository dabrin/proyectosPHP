import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';
import { SalesService } from '../services/sales.service';
import { LoansService } from '../services/loans.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  value = localStorage.getItem("permisoAdm");
  user = localStorage.getItem("user");
  constructor(
    private route: Router,
    private prods: ProductsService,
    private customers: CustomersService,
    private loans: LoansService,
    private sales: SalesService,
    
   
  ) { 
    
  }

  ngOnInit() {
    this.value = localStorage.getItem("permisoAdm");
    this.user=  localStorage.getItem("user");
  }

  login() { 
    this.route.navigate(['login']);
  }

  exportToXlsx() {
    
    //const fileTransfer: FileTransferObject = this.transfer.create();
    /*fileTransfer.download("", 'productos.xlsx').then((entry) => {
      this.prods.getAllProducts().subscribe((data: any) => {
      this.backup.exportToXlsx(data,'productos')
      });
    }, (error) => { 

    });
     
   
    this.customers.getAllCustomers().subscribe((data: any) => {
      this.backup.exportToXlsx(data,'clientes')
    });
    this.loans.getAllLoans().subscribe((data: any) => {
      this.backup.exportToXlsx(data,'prestamos')
    });
    this.sales.getAllSales().subscribe((data: any) => {
      this.backup.exportToXlsx(data,'ventas')
   });
    */
  }

}
